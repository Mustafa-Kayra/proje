import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { AlertTriangle, Heart, Smile, Frown, Zap, ArrowRight, Eye, EyeOff } from 'lucide-react';

const GameScenario = ({ scenario, gameMode, stats, onMakeChoice, onNextScenario, currentTheme }) => {
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
      case 'playful': return <Smile className="h-5 w-5 text-pink-500" />;
      case 'hungry': return <Heart className="h-5 w-5 text-orange-600" />;
      case 'cold': return <AlertTriangle className="h-5 w-5 text-blue-600" />;
      case 'hopeful': return <Heart className="h-5 w-5 text-green-600" />;
      case 'curious': return <Eye className="h-5 w-5 text-purple-500" />;
      case 'determined': return <Zap className="h-5 w-5 text-indigo-500" />;
      default: return <Heart className="h-5 w-5 text-gray-500" />;
    }
  };

  const getActionTypeIcon = (actionType) => {
    switch(actionType) {
      case 'choice': return '🤔';
      case 'action': return '💥';
      case 'adventure': return '🗺️';
      case 'play': return '🎾';
      case 'social': return '💕';
      case 'survival': return '🍖';
      case 'escape': return '💨';
      case 'trust': return '🤝';
      case 'opportunity': return '🌟';
      case 'shelter': return '🏠';
      case 'hunt': return '🎯';
      case 'rescue': return '🚁';
      case 'medical': return '🏥';
      case 'relocation': return '📦';
      case 'adoption': return '💝';
      default: return '❓';
    }
  };

  const getThemeBackground = (mood) => {
    const themeData = currentTheme || 'colorful';
    const themes = {
      colorful: {
        happy: 'bg-gradient-to-br from-green-50 to-emerald-100',
        sad: 'bg-gradient-to-br from-blue-50 to-sky-100',
        danger: 'bg-gradient-to-br from-red-50 to-rose-100',
        worried: 'bg-gradient-to-br from-orange-50 to-amber-100',
        panic: 'bg-gradient-to-br from-red-100 to-pink-100',
        excited: 'bg-gradient-to-br from-yellow-50 to-orange-100',
        playful: 'bg-gradient-to-br from-pink-50 to-purple-100',
        hungry: 'bg-gradient-to-br from-orange-100 to-red-100',
        cold: 'bg-gradient-to-br from-blue-100 to-indigo-100',
        hopeful: 'bg-gradient-to-br from-green-100 to-teal-100',
        curious: 'bg-gradient-to-br from-purple-50 to-indigo-100',
        determined: 'bg-gradient-to-br from-indigo-50 to-blue-100',
        default: 'bg-gradient-to-br from-gray-50 to-slate-100'
      },
      dark: {
        happy: 'bg-gradient-to-br from-gray-800 to-gray-900',
        sad: 'bg-gradient-to-br from-slate-800 to-slate-900',
        danger: 'bg-gradient-to-br from-red-900 to-black',
        worried: 'bg-gradient-to-br from-amber-900 to-black',
        panic: 'bg-gradient-to-br from-red-800 to-black',
        excited: 'bg-gradient-to-br from-yellow-900 to-black',
        playful: 'bg-gradient-to-br from-pink-900 to-black',
        hungry: 'bg-gradient-to-br from-orange-900 to-black',
        cold: 'bg-gradient-to-br from-blue-900 to-black',
        hopeful: 'bg-gradient-to-br from-green-900 to-black',
        curious: 'bg-gradient-to-br from-purple-900 to-black',
        determined: 'bg-gradient-to-br from-indigo-900 to-black',
        default: 'bg-gradient-to-br from-gray-900 to-black'
      },
      light: {
        happy: 'bg-gradient-to-br from-white to-gray-50',
        sad: 'bg-gradient-to-br from-gray-50 to-gray-100',
        danger: 'bg-gradient-to-br from-red-50 to-gray-100',
        worried: 'bg-gradient-to-br from-orange-50 to-gray-100',
        panic: 'bg-gradient-to-br from-red-100 to-gray-100',
        excited: 'bg-gradient-to-br from-yellow-50 to-gray-100',
        playful: 'bg-gradient-to-br from-pink-50 to-gray-100',
        hungry: 'bg-gradient-to-br from-orange-50 to-gray-100',
        cold: 'bg-gradient-to-br from-blue-50 to-gray-100',
        hopeful: 'bg-gradient-to-br from-green-50 to-gray-100',
        curious: 'bg-gradient-to-br from-purple-50 to-gray-100',
        determined: 'bg-gradient-to-br from-indigo-50 to-gray-100',
        default: 'bg-gradient-to-br from-white to-gray-100'
      }
    };
    
    return themes[themeData]?.[mood] || themes[themeData]?.default || themes.colorful.default;
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

  const getTextColor = () => {
    return currentTheme === 'dark' ? 'text-white' : 'text-gray-800';
  };

  const getCardBg = () => {
    return currentTheme === 'dark' 
      ? 'bg-gray-800/90 border-gray-700' 
      : 'bg-white/90';
  };

  return (
    <div className={`min-h-screen ${getThemeBackground(scenario.mood)} p-4 flex items-center justify-center`}>
      <div className="w-full max-w-2xl">
        <Card className={`shadow-xl border-0 backdrop-blur-sm ${getCardBg()}`}>
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="text-2xl">{getActionTypeIcon(scenario.actionType)}</div>
              {getMoodIcon(scenario.mood)}
              <CardTitle className={`text-2xl font-bold ${getTextColor()}`}>
                {scenario.title}
              </CardTitle>
            </div>
            <Badge variant="outline" className="text-xs">
              {scenario.actionType === 'choice' && 'Seçim'}
              {scenario.actionType === 'action' && 'Aksiyon'}
              {scenario.actionType === 'adventure' && 'Macera'}
              {scenario.actionType === 'play' && 'Oyun'}
              {scenario.actionType === 'social' && 'Sosyal'}
              {scenario.actionType === 'survival' && 'Hayatta Kalma'}
              {scenario.actionType === 'escape' && 'Kaçış'}
              {scenario.actionType === 'trust' && 'Güven'}
              {scenario.actionType === 'opportunity' && 'Fırsat'}
              {scenario.actionType === 'shelter' && 'Barınak'}
              {scenario.actionType === 'hunt' && 'Avcılık'}
              {scenario.actionType === 'rescue' && 'Kurtarma'}
              {scenario.actionType === 'medical' && 'Tıbbi'}
              {scenario.actionType === 'relocation' && 'Taşınma'}
              {scenario.actionType === 'adoption' && 'Sahiplenme'}
            </Badge>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Scenario Description */}
            <div className="text-center">
              <p className={`text-lg leading-relaxed ${getTextColor()}`}>
                {scenario.description}
              </p>
              {(scenario.hunger !== undefined || scenario.kittens) && (
                <div className="flex flex-wrap gap-2 justify-center mt-3">
                  {scenario.hunger !== undefined && (
                    <Badge variant="outline" className="text-xs">
                      Açlık Etkisi: {scenario.hunger > 0 ? '+' : ''}{scenario.hunger}
                    </Badge>
                  )}
                  {scenario.kittens && (
                    <Badge variant="outline" className="text-xs">
                      Yavru Durumu Kritik!
                    </Badge>
                  )}
                </div>
              )}
            </div>

            {!showResult ? (
              /* Choice Options - Points Hidden */
              <div className="space-y-3">
                <h3 className={`font-semibold text-center mb-4 ${getTextColor()}`}>Ne yaparsın?</h3>
                {scenario.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleChoice(index)}
                    className={`w-full p-4 h-auto text-left ${getChoiceButtonColor(index)} text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-102`}
                    disabled={selectedChoice !== null}
                  >
                    <div className="space-y-1">
                      <div className="font-medium">{option.text}</div>
                      {/* Hidden points - only show effect hints */}
                      <div className="text-xs opacity-90 flex flex-wrap gap-2">
                        {option.hunger && <span>Açlık Etkisi</span>}
                        {option.health && <span>Sağlık Etkisi</span>}
                        {option.ownerLove && <span>Sahibin Sevgisi</span>}
                        {option.adoptionChance && <span>Sahiplenme Şansı</span>}
                        {option.kittenHunger && <span>Yavru Besleme</span>}
                        {option.kittenSafety && <span>Yavru Güvenliği</span>}
                        {option.kittenHealth && <span>Yavru Sağlığı</span>}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            ) : (
              /* Choice Result - Now Show Points */
              <div className="space-y-4">
                <div className={`${currentTheme === 'dark' ? 'bg-gray-700' : 'bg-white'} rounded-lg p-4 border-l-4 border-purple-500`}>
                  <h3 className={`font-semibold mb-2 ${getTextColor()}`}>Sonuç:</h3>
                  <p className={`mb-3 ${getTextColor()}`}>{choiceResult.consequence}</p>
                  <div className="flex flex-wrap gap-2">
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
                    {choiceResult.ownerLove && (
                      <Badge className="bg-pink-100 text-pink-800">
                        Sahibin Sevgisi: {choiceResult.ownerLove > 0 ? '+' : ''}{choiceResult.ownerLove}
                      </Badge>
                    )}
                    {choiceResult.adoptionChance && (
                      <Badge className="bg-green-100 text-green-800">
                        Sahiplenme: +{choiceResult.adoptionChance}%
                      </Badge>
                    )}
                    {choiceResult.kittenHunger && (
                      <Badge className="bg-yellow-100 text-yellow-800">
                        Yavru Açlık: +{choiceResult.kittenHunger}
                      </Badge>
                    )}
                    {choiceResult.kittenSafety && (
                      <Badge className="bg-blue-100 text-blue-800">
                        Yavru Güvenlik: {choiceResult.kittenSafety}%
                      </Badge>
                    )}
                    {choiceResult.kittenHealth && (
                      <Badge className="bg-teal-100 text-teal-800">
                        Yavru Sağlık: +{choiceResult.kittenHealth}
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