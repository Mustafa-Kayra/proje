import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Heart, Zap, Coffee, Clock, Cloud, Sun, CloudRain, Snowflake, Wind } from 'lucide-react';
import { gameStats, weatherEffects, timeOfDay } from '../data/mock';

const GameDashboard = ({ gameMode, stats, onUpdateStats }) => {
  const [weather, setWeather] = useState(weatherEffects[0]);
  const [currentTime, setCurrentTime] = useState(timeOfDay[0]);

  useEffect(() => {
    // Simulate weather changes every 30 seconds
    const weatherInterval = setInterval(() => {
      const randomWeather = weatherEffects[Math.floor(Math.random() * weatherEffects.length)];
      setWeather(randomWeather);
    }, 30000);

    // Simulate time progression every 15 seconds
    const timeInterval = setInterval(() => {
      const randomTime = timeOfDay[Math.floor(Math.random() * timeOfDay.length)];
      setCurrentTime(randomTime);
    }, 15000);

    return () => {
      clearInterval(weatherInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const getWeatherIcon = (type) => {
    switch(type) {
      case 'sunny': return <Sun className="h-4 w-4 text-yellow-500" />;
      case 'rainy': return <CloudRain className="h-4 w-4 text-blue-500" />;
      case 'snowy': return <Snowflake className="h-4 w-4 text-blue-200" />;
      case 'windy': return <Wind className="h-4 w-4 text-gray-500" />;
      default: return <Cloud className="h-4 w-4" />;
    }
  };

  const getMoodColor = (mood) => {
    switch(mood) {
      case 'happy': return 'bg-green-100 text-green-800';
      case 'sad': return 'bg-blue-100 text-blue-800';
      case 'danger': return 'bg-red-100 text-red-800';
      case 'excited': return 'bg-yellow-100 text-yellow-800';
      case 'worried': return 'bg-orange-100 text-orange-800';
      case 'panic': return 'bg-red-200 text-red-900';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Main Stats */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Zap className="h-4 w-4 text-purple-500" />
            Oyun Durumu
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Puan</span>
            <Badge variant="secondary">{stats.points}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Mod</span>
            <Badge className={getMoodColor(stats.mood)}>{gameMode.name}</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Health and Hunger (Medium/Hard modes) */}
      {(gameMode.name !== 'Ev Kedisi') && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Heart className="h-4 w-4 text-red-500" />
              Sağlık Durumu
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Sağlık</span>
                <span className="text-xs text-gray-500">{stats.health}/100</span>
              </div>
              <Progress value={stats.health} className="h-2" />
            </div>
            {stats.hunger !== undefined && (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">Açlık</span>
                  <span className="text-xs text-gray-500">{stats.hunger}/100</span>
                </div>
                <Progress 
                  value={stats.hunger} 
                  className="h-2" 
                />
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Environment */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-indigo-500" />
            Çevre
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2">
            {getWeatherIcon(weather.type)}
            <span className="text-xs text-gray-600">{weather.effect}</span>
          </div>
          <div className="flex items-center gap-2">
            <Coffee className="h-4 w-4 text-amber-500" />
            <span className="text-xs text-gray-600">{currentTime.effect}</span>
          </div>
        </CardContent>
      </Card>

      {/* Kittens Status (Hard mode only) */}
      {stats.kittens && (
        <Card className="md:col-span-3">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Heart className="h-4 w-4 text-pink-500" />
              Yavrular
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {stats.kittens.map((kitten, index) => (
                <div key={index} className="bg-pink-50 rounded-lg p-3">
                  <div className="font-medium text-sm text-gray-800 mb-2">{kitten.name}</div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Sağlık</span>
                        <span>{kitten.health}/100</span>
                      </div>
                      <Progress value={kitten.health} className="h-1" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Açlık</span>
                        <span>{kitten.hunger}/100</span>
                      </div>
                      <Progress value={kitten.hunger} className="h-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GameDashboard;