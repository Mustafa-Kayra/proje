import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  User, 
  Trophy, 
  Calendar, 
  Star, 
  Target, 
  Clock,
  Award,
  TrendingUp,
  GamepadIcon
} from 'lucide-react';
import { playerProfiles, gameHistory, achievements } from '../data/mock';

const ProfilePanel = ({ isOpen, onClose, currentPlayer = 0 }) => {
  const [activeTab, setActiveTab] = useState('stats');
  const player = playerProfiles[currentPlayer];

  if (!isOpen) return null;

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Ev Kedisi': return 'bg-green-100 text-green-800';
      case 'Sokak Kedisi': return 'bg-yellow-100 text-yellow-800'; 
      case 'Anne Kedi': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getResultColor = (result) => {
    if (result.includes('Başarılı') || result.includes('Sahiplen') || result.includes('Kurtul') || result.includes('mutlu')) {
      return 'text-green-600';
    }
    if (result.includes('öldüm') || result.includes('öldü')) {
      return 'text-red-600';
    }
    return 'text-gray-600';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-full">
                <User className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <CardTitle className="text-xl">{player.name}</CardTitle>
                <p className="text-sm text-gray-600">Kedi Oyuncusu</p>
              </div>
            </div>
            <Button variant="outline" onClick={onClose}>
              Kapat
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
            <Button
              variant={activeTab === 'stats' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('stats')}
              className="flex-1"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              İstatistikler
            </Button>
            <Button
              variant={activeTab === 'history' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('history')}
              className="flex-1"
            >
              <Clock className="h-4 w-4 mr-2" />
              Geçmiş
            </Button>
            <Button
              variant={activeTab === 'achievements' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('achievements')}
              className="flex-1"
            >
              <Award className="h-4 w-4 mr-2" />
              Başarımlar
            </Button>
          </div>

          {/* Stats Tab */}
          {activeTab === 'stats' && (
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <GamepadIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-800">{player.totalGames}</div>
                  <div className="text-sm text-blue-600">Toplam Oyun</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <Trophy className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-800">{player.bestScore}</div>
                  <div className="text-sm text-green-600">En Yüksek Skor</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-800">{player.achievements.length}</div>
                  <div className="text-sm text-purple-600">Başarım</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <Star className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-bold text-orange-800 capitalize">{player.favoriteDifficulty}</div>
                  <div className="text-sm text-orange-600">Favori Mod</div>
                </div>
              </div>

              {/* Difficulty Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Zorluk Seviyesi İlerlemesi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Ev Kedisi</span>
                      <span className="text-sm text-gray-600">8/10 Oyun</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Sokak Kedisi</span>
                      <span className="text-sm text-gray-600">5/10 Oyun</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Anne Kedi</span>
                      <span className="text-sm text-gray-600">2/10 Oyun</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-4">Son Oyunlar</h3>
              {gameHistory.map((game, index) => (
                <Card key={index} className="border-l-4 border-l-purple-500">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{game.date}</span>
                        <Badge className={getDifficultyColor(game.difficulty)}>
                          {game.difficulty}
                        </Badge>
                      </div>
                      <Badge variant="outline" className="font-mono">
                        {game.score} puan
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${getResultColor(game.result)}`}>
                        {game.result}
                      </span>
                      <span className="text-xs text-gray-500">
                        {game.duration}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-4">Başarımlar</h3>
              <div className="grid gap-4">
                {achievements.map((achievement) => (
                  <Card 
                    key={achievement.id} 
                    className={`${achievement.unlocked ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className={`text-3xl ${!achievement.unlocked ? 'grayscale' : ''}`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold ${achievement.unlocked ? 'text-green-800' : 'text-gray-500'}`}>
                            {achievement.name}
                          </h4>
                          <p className={`text-sm ${achievement.unlocked ? 'text-green-600' : 'text-gray-400'}`}>
                            {achievement.description}
                          </p>
                        </div>
                        {achievement.unlocked && (
                          <Badge className="bg-green-100 text-green-800">
                            Tamamlandı
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePanel;