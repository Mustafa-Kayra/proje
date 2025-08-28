import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Cat, Home, MapPin, Baby } from 'lucide-react';
import { gameScenarios, themes } from '../data/mock';

const GameMenu = ({ onStartGame, currentTheme }) => {
  const [selectedMode, setSelectedMode] = useState(null);

  const getThemeMenuBg = () => {
    const themeData = themes[currentTheme] || themes.colorful;
    return themeData.menuBg;
  };

  const getModeIcon = (mode) => {
    switch(mode) {
      case 'easy': return <Home className="h-8 w-8 text-green-600" />;
      case 'medium': return <MapPin className="h-8 w-8 text-yellow-600" />;
      case 'hard': return <Baby className="h-8 w-8 text-red-600" />;
      default: return <Cat className="h-8 w-8" />;
    }
  };

  const getModeColor = (mode) => {
    switch(mode) {
      case 'easy': return 'border-green-200 hover:border-green-400 bg-green-50';
      case 'medium': return 'border-yellow-200 hover:border-yellow-400 bg-yellow-50';
      case 'hard': return 'border-red-200 hover:border-red-400 bg-red-50';
      default: return 'border-gray-200';
    }
  };

  const getDifficultyBadge = (mode) => {
    switch(mode) {
      case 'easy': return <Badge className="bg-green-100 text-green-800">Kolay</Badge>;
      case 'medium': return <Badge className="bg-yellow-100 text-yellow-800">Orta</Badge>;
      case 'hard': return <Badge className="bg-red-100 text-red-800">Zor</Badge>;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Game Title */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Cat className="h-12 w-12 text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Kedi Macera Oyunu
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Üç farklı zorluk seviyesinde kedi yaşamını deneyimle! Her seviye kendine özgü 
            hikayeler ve zorluklarla dolu.
          </p>
        </div>

        {/* Game Modes */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {Object.entries(gameScenarios).map(([mode, data]) => (
            <Card 
              key={mode}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${getModeColor(mode)} 
                ${selectedMode === mode ? 'ring-2 ring-purple-500 shadow-lg' : 'hover:shadow-md'}`}
              onClick={() => setSelectedMode(mode)}
            >
              <CardHeader className="text-center pb-3">
                <div className="flex justify-center mb-3">
                  {getModeIcon(mode)}
                </div>
                <CardTitle className="flex items-center justify-center gap-2 text-xl">
                  {data.name}
                  {getDifficultyBadge(mode)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  {data.description}
                </p>
                
                {/* Personality Traits */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-gray-800">Kişilik Özellikleri:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {data.personality.map((trait, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Mode specific features */}
                <div className="text-xs text-gray-600 space-y-1">
                  {mode === 'easy' && (
                    <div className="bg-green-100 rounded-lg p-2">
                      • Vazo düşürme puanları<br/>
                      • Sahibin sevgisi<br/>
                      • Ölüm riski yok
                    </div>
                  )}
                  {mode === 'medium' && (
                    <div className="bg-yellow-100 rounded-lg p-2">
                      • Açlık sistemi<br/>
                      • Tehlike faktörleri<br/>
                      • Sahiplenilme hedefi
                    </div>
                  )}
                  {mode === 'hard' && (
                    <div className="bg-red-100 rounded-lg p-2">
                      • 3 yavruya bakım<br/>
                      • Karmaşık kararlar<br/>
                      • Yüksek risk faktörü
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Start Game Button */}
        {selectedMode && (
          <div className="text-center">
            <Button 
              onClick={() => onStartGame(selectedMode)}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-medium rounded-xl transform transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Oyuna Başla
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameMenu;