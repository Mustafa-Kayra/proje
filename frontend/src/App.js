import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameMenu from './components/GameMenu';
import GameScenario from './components/GameScenario';
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
    
    // Update hunger if exists
    if (choice.hunger && newStats.hunger !== undefined) {
      newStats.hunger = Math.max(0, Math.min(100, newStats.hunger + choice.hunger));
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

    // Check game over conditions
    if (newStats.hunger !== undefined && newStats.hunger <= 0) {
      setGameOver(true);
      toast({
        title: "Oyun Bitti!",
        description: "Açlıktan öldün... 😿",
        variant: "destructive"
      });
    }

    if (newStats.health !== undefined && newStats.health <= 0) {
      setGameOver(true);
      toast({
        title: "Oyun Bitti!",
        description: "Sağlığın bitti... 😿",
        variant: "destructive"
      });
    }

    // Check kitten health in hard mode
    if (newStats.kittens) {
      const deadKitten = newStats.kittens.find(kitten => kitten.health <= 0 || kitten.hunger <= 0);
      if (deadKitten) {
        setGameOver(true);
        toast({
          title: "Oyun Bitti!",
          description: `${deadKitten.name} öldü... Anne kedi olarak başarısız oldun. 😿`,
          variant: "destructive"
        });
      }
    }

    // Check adoption success
    if (newStats.adoptionChance >= 100) {
      setGameOver(true);
      toast({
        title: "Tebrikler! 🎉",
        description: "Başarıyla sahiplenildin! Mutlu bir yuvan var artık! 🏠💕",
      });
    }

    // Check owner love success (easy mode)
    if (newStats.ownerLove >= 100) {
      setGameOver(true);
      toast({
        title: "Mükemmel! 💕",
        description: "Sahibin seni çok çok seviyor! En sevimli kedisin! 🐱👑",
      });
    }

    setStats(newStats);
  };

  const nextScenario = () => {
    if (gameOver) return;

    const nextIndex = currentScenarioIndex + 1;
    
    if (nextIndex >= currentGame.scenarios.length) {
      // Game completed successfully
      toast({
        title: "Tebrikler!",
        description: `Oyunu başarıyla tamamladın! Toplam puan: ${stats.points}`,
      });
      setGameOver(true);
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
  };

  if (!currentGame) {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<GameMenu onStartGame={startGame} />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    );
  }

  if (gameOver) {
    return (
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 text-center max-w-md">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Oyun Bitti!</h2>
            <p className="text-gray-600 mb-2">Toplam Puan: <span className="font-bold text-purple-600">{stats.points}</span></p>
            <p className="text-gray-600 mb-6">Mod: {gameMode.name}</p>
            <button
              onClick={resetGame}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              Yeniden Oyna
            </button>
          </div>
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
                />
              </div>
              <GameScenario 
                scenario={currentScenario}
                gameMode={gameMode}
                stats={stats}
                onMakeChoice={makeChoice}
                onNextScenario={nextScenario}
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