import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { AlertTriangle, Heart, Smile, Frown, Zap, ArrowRight } from 'lucide-react';

const GameScenario = ({ scenario, gameMode, stats, onMakeChoice, onNextScenario }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [choiceResult, setChoiceResult] = useState(null);

  const getMoodIcon = (mood) => {
    switch(mood) {
      case 'happy': return <Smile className="h-5 w-5 text-green-500" />;
      case 'sad': return <Frown className="h-5 w-5 text-blue-500" />;
      case 'danger': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'worried': return <Heart className="h-5 w-5 text-orange-500" />;
      case 'panic': return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case 'excited': return <Zap className="h-5 w-5 text-yellow-500" />;
      default: return <Heart className="h-5 w-5 text-gray-500" />;
    }
  };

  const getMoodBg = (mood) => {
    switch(mood) {
      case 'happy': return 'bg-gradient-to-br from-green-50 to-emerald-100';
      case 'sad': return 'bg-gradient-to-br from-blue-50 to-sky-100';
      case 'danger': return 'bg-gradient-to-br from-red-50 to-rose-100';
      case 'worried': return 'bg-gradient-to-br from-orange-50 to-amber-100';
      case 'panic': return 'bg-gradient-to-br from-red-100 to-pink-100';
      case 'excited': return 'bg-gradient-to-br from-yellow-50 to-orange-100';
      default: return 'bg-gradient-to-br from-gray-50 to-slate-100';
    }
  };

  const handleChoice = (choiceIndex) => {
    const choice = scenario.options[choiceIndex];
    setSelectedChoice(choiceIndex);
    setChoiceResult(choice);
    setShowResult(true);
    
    // Update game stats
    onMakeChoice(choice);
  };

  const handleNextScenario = () => {
    setSelectedChoice(null);
    setShowResult(false);
    setChoiceResult(null);
    onNextScenario();
  };

  const getChoiceButtonColor = (index) => {
    const colors = [
      'bg-blue-500 hover:bg-blue-600',
      'bg-green-500 hover:bg-green-600', 
      'bg-purple-500 hover:bg-purple-600'
    ];
    return colors[index] || 'bg-gray-500 hover:bg-gray-600';
  };

  return (
    <div className={`min-h-screen ${getMoodBg(scenario.mood)} p-4 flex items-center justify-center`}>
      <div className="w-full max-w-2xl">
        <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/90">
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              {getMoodIcon(scenario.mood)}
              <CardTitle className="text-2xl font-bold text-gray-800">
                {scenario.title}
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Scenario Description */}
            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                {scenario.description}
              </p>
              {scenario.hunger !== undefined && (
                <Badge variant="outline" className="mt-3">
                  Açlık Etkisi: {scenario.hunger > 0 ? '+' : ''}{scenario.hunger}
                </Badge>
              )}
            </div>

            {!showResult ? (
              /* Choice Options */
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 text-center mb-4">Ne yaparsın?</h3>
                {scenario.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleChoice(index)}
                    className={`w-full p-4 h-auto text-left ${getChoiceButtonColor(index)} text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-102`}
                    disabled={selectedChoice !== null}
                  >
                    <div className="space-y-1">
                      <div className="font-medium">{option.text}</div>
                      <div className="text-xs opacity-90">
                        Puan: +{option.points}
                        {option.hunger && ` | Açlık: ${option.hunger > 0 ? '+' : ''}${option.hunger}`}
                        {option.health && ` | Sağlık: ${option.health > 0 ? '+' : ''}${option.health}`}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            ) : (
              /* Choice Result */
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Sonuç:</h3>
                  <p className="text-gray-700">{choiceResult.consequence}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge className="bg-purple-100 text-purple-800">
                      +{choiceResult.points} Puan
                    </Badge>
                    {choiceResult.hunger && (
                      <Badge className="bg-orange-100 text-orange-800">
                        Açlık: {choiceResult.hunger > 0 ? '+' : ''}{choiceResult.hunger}
                      </Badge>
                    )}
                    {choiceResult.health && (
                      <Badge className="bg-red-100 text-red-800">
                        Sağlık: {choiceResult.health > 0 ? '+' : ''}{choiceResult.health}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    onClick={handleNextScenario}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transform transition-all duration-200 hover:scale-105"
                  >
                    Devam Et
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Game Mode indicator */}
            <div className="text-center pt-4 border-t border-gray-200">
              <Badge variant="outline" className="text-xs">
                {gameMode.name} Modu
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GameScenario;