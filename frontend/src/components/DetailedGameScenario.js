import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { AlertTriangle, Heart, Smile, Frown, Zap, ArrowRight, Volume2, Eye, Thermometer, Clock } from 'lucide-react';
import { catDetails, specialEvents, randomEvents } from '../data/mock';

const DetailedGameScenario = ({ scenario, gameMode, stats, onMakeChoice, onNextScenario, currentTheme, gameTime }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [choiceResult, setChoiceResult] = useState(null);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [catVocalization, setCatVocalization] = useState('');
  const [environmentalDetails, setEnvironmentalDetails] = useState('');

  useEffect(() => {
    // Generate cat sounds based on mood
    if (scenario.catSound) {
      setCatVocalization(scenario.catSound);
    } else {
      const soundCategory = catDetails.sounds[scenario.mood] || catDetails.sounds.happy;
      const randomSound = soundCategory[Math.floor(Math.random() * soundCategory.length)];
      setCatVocalization(randomSound);
    }

    // Generate environmental details
    const timeData = catDetails.timeEffects[getCurrentTimeOfDay(gameTime)];
    const seasonData = catDetails.seasons[getCurrentSeason()];
    setEnvironmentalDetails(`${timeData.description} | ${seasonData.description}`);

    // Random special events
    const eventChance = Math.random();
    if (eventChance < 0.1) {
      const availableEvents = randomEvents.filter(e => Math.random() < e.probability);
      if (availableEvents.length > 0) {
        setCurrentEvent(availableEvents[0]);
      }
    }
  }, [scenario, gameTime]);

  const getCurrentTimeOfDay = (gameTime) => {
    const hour = new Date(gameTime).getHours();
    if (hour >= 5 && hour < 7) return 'dawn';
    if (hour >= 7 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 14) return 'noon';
    if (hour >= 14 && hour < 18) return 'afternoon';
    if (hour >= 18 && hour < 22) return 'evening';
    return 'night';
  };

  const getCurrentSeason = () => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'autumn';
    return 'winter';
  };

  const getMoodIcon = (mood) => {
    const icons = {
      happy: <Smile className="h-5 w-5 text-green-500" />,
      sad: <Frown className="h-5 w-5 text-blue-500" />,
      danger: <AlertTriangle className="h-5 w-5 text-red-500" />,
      worried: <Heart className="h-5 w-5 text-orange-500" />,
      panic: <AlertTriangle className="h-5 w-5 text-red-600" />,
      excited: <Zap className="h-5 w-5 text-yellow-500" />,
      playful: <Smile className="h-5 w-5 text-pink-500" />,
      hungry: <Heart className="h-5 w-5 text-orange-600" />,
      cold: <Thermometer className="h-5 w-5 text-blue-600" />,
      hopeful: <Heart className="h-5 w-5 text-green-600" />,
      curious: <Eye className="h-5 w-5 text-purple-500" />,
      determined: <Zap className="h-5 w-5 text-indigo-500" />,
      cautious: <Eye className="h-5 w-5 text-yellow-600" />,
      desperate: <AlertTriangle className="h-5 w-5 text-red-700" />,
      uncertain: <Heart className="h-5 w-5 text-gray-500" />,
      social: <Heart className="h-5 w-5 text-pink-600" />,
      urgent: <Zap className="h-5 w-5 text-red-500" />,
      alert: <Eye className="h-5 w-5 text-orange-500" />,
      energetic: <Zap className="h-5 w-5 text-lime-500" />,
      disgusted: <Frown className="h-5 w-5 text-brown-500" />
    };
    return icons[mood] || <Heart className="h-5 w-5 text-gray-500" />;
  };

  const getActionTypeIcon = (actionType) => {
    const icons = {
      choice: '🤔', action: '💥', adventure: '🗺️', play: '🎾', social: '💕',
      survival: '🍖', escape: '💨', trust: '🤝', opportunity: '🌟', shelter: '🏠',
      hunt: '🎯', rescue: '🚁', medical: '🏥', relocation: '📦', adoption: '💝',
      nurturing: '🤱', diplomacy: '🤝', observation: '👀', comfort: '😴',
      necessity: '🚽'
    };
    return icons[actionType] || '❓';
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
        cautious: 'bg-gradient-to-br from-yellow-100 to-orange-100',
        desperate: 'bg-gradient-to-br from-red-200 to-orange-200',
        uncertain: 'bg-gradient-to-br from-gray-100 to-slate-200',
        social: 'bg-gradient-to-br from-pink-100 to-purple-100',
        urgent: 'bg-gradient-to-br from-red-100 to-yellow-100',
        alert: 'bg-gradient-to-br from-orange-100 to-red-100',
        energetic: 'bg-gradient-to-br from-lime-50 to-green-100',
        disgusted: 'bg-gradient-to-br from-brown-100 to-amber-100',
        default: 'bg-gradient-to-br from-gray-50 to-slate-100'
      },
      dark: {
        happy: 'bg-gradient-to-br from-gray-800 to-gray-900',
        sad: 'bg-gradient-to-br from-slate-800 to-slate-900',
        danger: 'bg-gradient-to-br from-red-900 to-black',
        worried: 'bg-gradient-to-br from-amber-900 to-black',
        panic: 'bg-gradient-to-br from-red-800 to-black',
        excited: 'bg-gradient-to-br from-yellow-900 to-black',
        default: 'bg-gradient-to-br from-gray-900 to-black'
      },
      light: {
        happy: 'bg-gradient-to-br from-white to-gray-50',
        sad: 'bg-gradient-to-br from-gray-50 to-gray-100',
        danger: 'bg-gradient-to-br from-red-50 to-gray-100',
        worried: 'bg-gradient-to-br from-orange-50 to-gray-100',
        panic: 'bg-gradient-to-br from-red-100 to-gray-100',
        excited: 'bg-gradient-to-br from-yellow-50 to-gray-100',
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
    
    // Add environmental bonuses
    const timeBonus = catDetails.timeEffects[getCurrentTimeOfDay(gameTime)]?.bonus || {};
    const seasonBonus = catDetails.seasons[getCurrentSeason()]?.energy || 0;
    
    const enhancedChoice = {
      ...choice,
      points: choice.points + (timeBonus.points || 0),
      seasonalEffect: seasonBonus
    };
    
    onMakeChoice(enhancedChoice);
  };

  const handleNextScenario = () => {
    setSelectedChoice(null);
    setShowResult(false);
    setChoiceResult(null);
    setCurrentEvent(null);
    onNextScenario();
  };

  const getChoiceButtonColor = (index) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700', 
      'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
    ];
    return colors[index] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  };

  const getTextColor = () => {
    return currentTheme === 'dark' ? 'text-white' : 'text-gray-800';
  };

  const getCardBg = () => {
    return currentTheme === 'dark' 
      ? 'bg-gray-800/95 border-gray-700' 
      : 'bg-white/95';
  };

  return (
    <div className={`min-h-screen ${getThemeBackground(scenario.mood)} p-4 flex items-center justify-center relative`}>
      {/* Special Event Notification */}
      {currentEvent && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-yellow-500 text-white animate-pulse">
            🌟 {currentEvent.name}
          </Badge>
        </div>
      )}

      {/* Time and Season Display */}
      <div className="absolute top-4 right-4 z-10 space-y-1">
        <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
          <Clock className="h-3 w-3 mr-1" />
          {getCurrentTimeOfDay(gameTime)}
        </Badge>
        <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
          {getCurrentSeason()}
        </Badge>
      </div>

      <div className="w-full max-w-3xl">
        <Card className={`shadow-2xl border-0 backdrop-blur-sm ${getCardBg()}`}>
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="text-3xl animate-bounce">{getActionTypeIcon(scenario.actionType)}</div>
              {getMoodIcon(scenario.mood)}
              <CardTitle className={`text-2xl font-bold ${getTextColor()}`}>
                {scenario.title}
              </CardTitle>
            </div>
            
            {/* Action Type Badge */}
            <Badge variant="outline" className="text-xs">
              {scenario.actionType === 'choice' && 'Seçim Zamanı'}
              {scenario.actionType === 'action' && 'Aksiyon!'}
              {scenario.actionType === 'adventure' && 'Macera'}
              {scenario.actionType === 'play' && 'Oyun Zamanı'}
              {scenario.actionType === 'social' && 'Sosyal Etkileşim'}
              {scenario.actionType === 'survival' && 'Hayatta Kalma'}
              {scenario.actionType === 'escape' && 'Kaçış!'}
              {scenario.actionType === 'trust' && 'Güven Testi'}
              {scenario.actionType === 'opportunity' && 'Fırsat'}
              {scenario.actionType === 'shelter' && 'Barınak Arayışı'}
              {scenario.actionType === 'hunt' && 'Avcılık'}
              {scenario.actionType === 'rescue' && 'Kurtarma Operasyonu'}
              {scenario.actionType === 'medical' && 'Tıbbi Durum'}
              {scenario.actionType === 'relocation' && 'Taşınma'}
              {scenario.actionType === 'adoption' && 'Sahiplenme Fırsatı'}
              {scenario.actionType === 'nurturing' && 'Anne Bakımı'}
              {scenario.actionType === 'diplomacy' && 'Diplomasi'}
              {scenario.actionType === 'observation' && 'Gözlem'}
              {scenario.actionType === 'comfort' && 'Rahatlık'}
              {scenario.actionType === 'necessity' && 'Zorunluluk'}
            </Badge>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Detailed Description */}
            <div className="text-center space-y-3">
              <p className={`text-lg leading-relaxed ${getTextColor()}`}>
                {scenario.description}
              </p>
              
              {/* Environmental Context */}
              <div className="bg-opacity-50 bg-gray-100 rounded-lg p-3">
                <p className="text-sm text-gray-600 italic">
                  🌍 {environmentalDetails}
                </p>
              </div>

              {/* Cat Vocalization */}
              <div className="flex items-center justify-center gap-2">
                <Volume2 className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium text-purple-700 italic">
                  "{catVocalization}"
                </span>
              </div>

              {/* Body Language */}
              {scenario.bodyLanguage && (
                <div className="bg-blue-50 rounded-lg p-2">
                  <p className="text-xs text-blue-700">
                    🐾 Vücut Dili: {scenario.bodyLanguage}
                  </p>
                </div>
              )}

              {/* Special Conditions */}
              {(scenario.hunger !== undefined || scenario.kittens) && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {scenario.hunger !== undefined && (
                    <Badge variant="destructive" className="text-xs animate-pulse">
                      ⚡ Açlık Etkisi: {scenario.hunger > 0 ? '+' : ''}{scenario.hunger}
                    </Badge>
                  )}
                  {scenario.kittens && (
                    <Badge variant="destructive" className="text-xs animate-pulse">
                      🍼 Yavru Durumu Kritik!
                    </Badge>
                  )}
                </div>
              )}
            </div>

            {!showResult ? (
              /* Enhanced Choice Options */
              <div className="space-y-4">
                <h3 className={`font-semibold text-center mb-4 ${getTextColor()}`}>
                  🤔 Ne yaparsın?
                </h3>
                {scenario.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleChoice(index)}
                    className={`w-full p-5 h-auto text-left ${getChoiceButtonColor(index)} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-0`}
                    disabled={selectedChoice !== null}
                  >
                    <div className="space-y-2 w-full">
                      <div className="font-medium text-base flex items-start gap-2">
                        <span className="text-lg">
                          {index === 0 && '🥇'}
                          {index === 1 && '🥈'} 
                          {index === 2 && '🥉'}
                        </span>
                        <span>{option.text}</span>
                      </div>
                      
                      {/* Effect Hints (No Numbers) */}
                      <div className="text-xs opacity-90 flex flex-wrap gap-2">
                        {option.hunger && <Badge className="bg-white/20 text-white">🍖 Açlık Etkisi</Badge>}
                        {option.health && <Badge className="bg-white/20 text-white">💊 Sağlık Etkisi</Badge>}
                        {option.ownerLove && <Badge className="bg-white/20 text-white">💕 Sevgi Etkisi</Badge>}
                        {option.adoptionChance && <Badge className="bg-white/20 text-white">🏠 Sahiplenme Etkisi</Badge>}
                        {option.kittenHunger && <Badge className="bg-white/20 text-white">🍼 Yavru Besleme</Badge>}
                        {option.kittenSafety && <Badge className="bg-white/20 text-white">🛡️ Yavru Güvenliği</Badge>}
                        {option.kittenHealth && <Badge className="bg-white/20 text-white">🏥 Yavru Sağlığı</Badge>}
                        {option.danger && <Badge className="bg-white/20 text-white">⚠️ Tehlike</Badge>}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            ) : (
              /* Enhanced Result Display */
              <div className="space-y-6">
                <div className={`${currentTheme === 'dark' ? 'bg-gray-700/80' : 'bg-white/80'} rounded-xl p-5 border-l-4 border-purple-500 backdrop-blur-sm`}>
                  <h3 className={`font-bold mb-3 text-lg ${getTextColor()}`}>
                    ✨ Sonuç:
                  </h3>
                  <p className={`mb-4 text-base leading-relaxed ${getTextColor()}`}>
                    {choiceResult.consequence}
                  </p>
                  
                  {/* Detailed Point Breakdown */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <Badge className="bg-purple-500 text-white p-2 text-center">
                      🏆 +{choiceResult.points} Puan
                    </Badge>
                    {choiceResult.hunger && (
                      <Badge className={`p-2 text-center ${choiceResult.hunger > 0 ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                        🍖 Açlık: {choiceResult.hunger > 0 ? '+' : ''}{choiceResult.hunger}
                      </Badge>
                    )}
                    {choiceResult.health && (
                      <Badge className={`p-2 text-center ${choiceResult.health > 0 ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                        💊 Sağlık: {choiceResult.health > 0 ? '+' : ''}{choiceResult.health}
                      </Badge>
                    )}
                    {choiceResult.ownerLove && (
                      <Badge className={`p-2 text-center ${choiceResult.ownerLove > 0 ? 'bg-pink-500' : 'bg-gray-500'} text-white`}>
                        💕 Sevgi: {choiceResult.ownerLove > 0 ? '+' : ''}{choiceResult.ownerLove}
                      </Badge>
                    )}
                    {choiceResult.adoptionChance && (
                      <Badge className="bg-green-600 text-white p-2 text-center">
                        🏠 Sahiplenme: +{choiceResult.adoptionChance}%
                      </Badge>
                    )}
                    {choiceResult.kittenHunger && (
                      <Badge className="bg-yellow-500 text-white p-2 text-center">
                        🍼 Yavru Açlık: +{choiceResult.kittenHunger}
                      </Badge>
                    )}
                    {choiceResult.kittenSafety && (
                      <Badge className="bg-blue-500 text-white p-2 text-center">
                        🛡️ Yavru Güvenlik: {choiceResult.kittenSafety}%
                      </Badge>
                    )}
                    {choiceResult.kittenHealth && (
                      <Badge className="bg-teal-500 text-white p-2 text-center">
                        🏥 Yavru Sağlık: +{choiceResult.kittenHealth}
                      </Badge>
                    )}
                  </div>

                  {/* Environmental Bonus */}
                  {choiceResult.seasonalEffect && (
                    <div className="mt-3">
                      <Badge className="bg-amber-500 text-white p-2">
                        🌸 Mevsim Bonusu: {choiceResult.seasonalEffect > 0 ? '+' : ''}{choiceResult.seasonalEffect} Enerji
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <Button
                    onClick={handleNextScenario}
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl transform transition-all duration-300 hover:scale-105 animate-pulse"
                  >
                    <span className="mr-2">🚀</span>
                    Sonraki Maceraya
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}

            {/* Game Mode Indicator */}
            <div className="text-center pt-4 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {gameMode.name} Modu
                </Badge>
                {gameMode.infiniteMode && (
                  <Badge className="bg-green-500 text-white text-xs animate-pulse">
                    ∞ Sonsuz Mod
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DetailedGameScenario;