import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameMenu from './components/GameMenu';
import DetailedGameScenario from './components/DetailedGameScenario';
import GameDashboard from './components/GameDashboard';
import ProfilePanel from './components/ProfilePanel';
import ThemeSelector from './components/ThemeSelector';
import { gameScenarios, gameStats, themes } from './data/mock';
import { Toaster } from './components/ui/toaster';
import { useToast } from './hooks/use-toast';
import './App.css';

function App() {
  const [currentGame, setCurrentGame] = useState(null);
  const [gameMode, setGameMode] = useState(null);
  const [stats, setStats] = useState(null);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('colorful');
  const [gameTime, setGameTime] = useState(Date.now());
  const [playTime, setPlayTime] = useState(0);
  const { toast } = useToast();

  const startGame = (mode) => {
    const selectedGame = gameScenarios[mode];
    const initialStats = { ...gameStats[mode] };
    
    setCurrentGame(selectedGame);
    setGameMode(selectedGame);
    setStats(initialStats);
    setCurrentScenarioIndex(0);
    setGameOver(false);

    toast({
      title: "Oyun Başladı!",
      description: `${selectedGame.name} modunda maceraya başlıyorsun!`,
    });
  };

  const makeChoice = (choice) => {
    const newStats = { ...stats };
    
    // Update points
    newStats.points += choice.points;
    
    // Update hunger if exists - STRICT HUNGER SYSTEM
    if (choice.hunger && newStats.hunger !== undefined) {
      newStats.hunger = Math.max(0, Math.min(100, newStats.hunger + choice.hunger));
      
      // Automatic hunger decrease over time (more realistic)
      newStats.hunger = Math.max(0, newStats.hunger - 3);
    }
    
    // Update health if exists
    if (choice.health && newStats.health !== undefined) {
      newStats.health = Math.max(0, Math.min(100, newStats.health + choice.health));
    }

    // Update owner love if exists (easy mode)
    if (choice.ownerLove && newStats.ownerLove !== undefined) {
      newStats.ownerLove = Math.max(0, Math.min(100, newStats.ownerLove + choice.ownerLove));
    }

    // Update adoption chance if exists
    if (choice.adoptionChance && newStats.adoptionChance !== undefined) {
      newStats.adoptionChance = Math.max(0, Math.min(100, newStats.adoptionChance + choice.adoptionChance));
    }

    // Update kitten stats if exists
    if (choice.kittenHunger && newStats.kittens) {
      newStats.kittens = newStats.kittens.map(kitten => ({
        ...kitten,
        hunger: Math.max(0, Math.min(100, kitten.hunger + choice.kittenHunger))
      }));
    }

    if (choice.kittenHealth && newStats.kittens) {
      newStats.kittens = newStats.kittens.map(kitten => ({
        ...kitten,
        health: Math.max(0, Math.min(100, kitten.health + choice.kittenHealth))
      }));
    }

    // STRICT DEATH CONDITIONS - HUNGER = 0 MEANS DEATH
    if (newStats.hunger !== undefined && newStats.hunger <= 0) {
      setGameOver(true);
      toast({
        title: "💀 Açlıktan Öldün!",
        description: `Karnın çok gurulduyordu... ${Math.floor(playTime/60000)} dakika yaşadın. 😿`,
        variant: "destructive"
      });
      return;
    }

    if (newStats.health !== undefined && newStats.health <= 0) {
      setGameOver(true);
      toast({
        title: "💀 Sağlığın Bitti!",
        description: `Çok zorlu sokak hayatıydı... ${Math.floor(playTime/60000)} dakika yaşadın. 😿`,
        variant: "destructive"
      });
      return;
    }

    // Check kitten health in hard mode - STRICT
    if (newStats.kittens) {
      const deadKitten = newStats.kittens.find(kitten => kitten.health <= 0 || kitten.hunger <= 0);
      if (deadKitten) {
        setGameOver(true);
        toast({
          title: "💔 Yavru Kaybı!",
          description: `${deadKitten.name} öldü... Anne kedi olarak başarısız oldun. ${Math.floor(playTime/60000)} dakika oynadın. 😿`,
          variant: "destructive"
        });
        return;
      }
    }

    // SUCCESSFUL ENDINGS
    if (newStats.adoptionChance >= 100) {
      setGameOver(true);
      toast({
        title: "🎉 SAHIPLENDIM!",
        description: `${Math.floor(playTime/60000)} dakika sonra sevgi dolu bir yuva buldum! 🏠💕`,
      });
      return;
    }

    if (newStats.ownerLove >= 100) {
      setGameOver(true);
      toast({
        title: "👑 MÜKEMMEL KEDİ!",
        description: `${Math.floor(playTime/60000)} dakika boyunca mükemmel ev kedisi oldun! 🐱💕`,
      });
      return;
    }

    setStats(newStats);
  };

  const nextScenario = () => {
    if (gameOver) return;

    // Update play time
    setPlayTime(prev => prev + 60000); // Add 1 minute per scenario
    
    // Easy mode - INFINITE LOOP
    if (gameMode.infiniteMode) {
      const nextIndex = (currentScenarioIndex + 1) % currentGame.scenarios.length;
      setCurrentScenarioIndex(nextIndex);
      
      if (nextIndex === 0) {
        toast({
          title: "🔄 Döngü Devam Ediyor!",
          description: `${Math.floor(playTime/60000)} dakika geçti. Ev kedisi yaşamı devam ediyor! 🏠`,
        });
      }
      return;
    }

    // Medium/Hard modes - LONGER GAMEPLAY
    const nextIndex = currentScenarioIndex + 1;
    
    if (nextIndex >= currentGame.scenarios.length) {
      // Add more random scenarios or loop with variations
      const extendedIndex = nextIndex % currentGame.scenarios.length;
      setCurrentScenarioIndex(extendedIndex);
      
      toast({
        title: "📚 Yeni Bölüm!",
        description: `Macera devam ediyor... ${Math.floor(playTime/60000)} dakika hayatta kalıyorsun!`,
      });
      return;
    }
    
    setCurrentScenarioIndex(nextIndex);
  };

  const resetGame = () => {
    setCurrentGame(null);
    setGameMode(null);
    setStats(null);
    setCurrentScenarioIndex(0);
    setGameOver(false);
    setShowProfile(false);
    setGameTime(Date.now());
    setPlayTime(0);
  };

  const getThemeGameOverBg = () => {
    const themeData = themes[currentTheme] || themes.colorful;
    if (currentTheme === 'dark') {
      return 'bg-gradient-to-br from-gray-800 to-black';
    } else if (currentTheme === 'light') {
      return 'bg-gradient-to-br from-white to-gray-100';
    }
    return 'bg-gradient-to-br from-purple-100 to-pink-100';
  };

  const getGameOverCardBg = () => {
    return currentTheme === 'dark' 
      ? 'bg-gray-800 border-gray-700' 
      : 'bg-white';
  };

  const getGameOverTextColor = () => {
    return currentTheme === 'dark' ? 'text-white' : 'text-gray-800';
  };

  if (!currentGame) {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={
              <div>
                <GameMenu onStartGame={startGame} currentTheme={currentTheme} />
                <ThemeSelector 
                  currentTheme={currentTheme} 
                  onThemeChange={setCurrentTheme}
                  position="bottom-right" 
                />
              </div>
            } />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    );
  }

  if (gameOver) {
    return (
      <BrowserRouter>
        <div className={`min-h-screen ${getThemeGameOverBg()} flex items-center justify-center p-4`}>
          <div className={`${getGameOverCardBg()} rounded-xl shadow-2xl p-8 text-center max-w-lg border border-purple-200`}>
            <div className="text-6xl mb-4">
              {stats.adoptionChance >= 100 && '🏠'}
              {stats.ownerLove >= 100 && '👑'}
              {(stats.hunger <= 0 || stats.health <= 0 || (stats.kittens && stats.kittens.find(k => k.health <= 0 || k.hunger <= 0))) && '💀'}
            </div>
            <h2 className={`text-3xl font-bold mb-4 ${getGameOverTextColor()}`}>
              {stats.adoptionChance >= 100 && 'SAHIPLENDIM!'}
              {stats.ownerLove >= 100 && 'MÜKEMMEL KEDİ!'}
              {(stats.hunger <= 0 || stats.health <= 0 || (stats.kittens && stats.kittens.find(k => k.health <= 0 || k.hunger <= 0))) && 'OYUN BİTTİ'}
            </h2>
            
            <div className="space-y-2 mb-6">
              <p className={`${getGameOverTextColor()}`}>
                <span className="font-bold text-purple-600 text-xl">{stats.points}</span> puan topladın
              </p>
              <p className={`${getGameOverTextColor()}`}>
                <span className="font-bold text-blue-600">{Math.floor(playTime/60000)} dakika</span> yaşadın
              </p>
              <p className={`${getGameOverTextColor()}`}>
                Mod: <span className="font-bold">{gameMode.name}</span>
              </p>
              {gameMode.infiniteMode && (
                <p className={`text-sm ${getGameOverTextColor()} opacity-75`}>
                  (Sonsuz modda oynuyordun)
                </p>
              )}
            </div>
            
            <div className="space-y-3">
              <button
                onClick={resetGame}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transform transition-all duration-200 hover:scale-105"
              >
                🎮 Yeniden Oyna
              </button>
              <button
                onClick={() => setShowProfile(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transform transition-all duration-200 hover:scale-105"
              >
                📊 İstatistikleri Gör
              </button>
            </div>
          </div>
          <ThemeSelector 
            currentTheme={currentTheme} 
            onThemeChange={setCurrentTheme}
            position="bottom-right" 
          />
          <Toaster />
        </div>
      </BrowserRouter>
    );
  }

  const currentScenario = currentGame.scenarios[currentScenarioIndex];

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div>
              <div className="container mx-auto px-4 py-4">
                <GameDashboard 
                  gameMode={gameMode}
                  stats={stats}
                  onUpdateStats={setStats}
                  onOpenProfile={() => setShowProfile(true)}
                  currentTheme={currentTheme}
                />
              </div>
              <DetailedGameScenario 
                scenario={currentScenario}
                gameMode={gameMode}
                stats={stats}
                onMakeChoice={makeChoice}
                onNextScenario={nextScenario}
                currentTheme={currentTheme}
                gameTime={gameTime}
              />
              <ProfilePanel 
                isOpen={showProfile}
                onClose={() => setShowProfile(false)}
              />
              <ThemeSelector 
                currentTheme={currentTheme} 
                onThemeChange={setCurrentTheme}
                position="bottom-right" 
              />
            </div>
          } />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;