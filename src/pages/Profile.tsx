
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { User, Heart, Settings } from 'lucide-react';

const Profile = () => {
  const { toast } = useToast();
  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  
  // Dietary preferences
  const [dietaryPreference, setDietaryPreference] = useState('none');
  const [favoriteCuisine, setFavoriteCuisine] = useState('italian');
  
  // Password change
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Sample favorite recipes
  const favoriteRecipes = [
    {
      id: 1,
      title: 'Garlic Butter Pasta with Herbs',
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
      dateAdded: '2023-06-15',
    },
    {
      id: 2,
      title: 'Mediterranean Quinoa Bowl',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      dateAdded: '2023-07-22',
    },
    {
      id: 3,
      title: 'High-Protein Chicken & Quinoa Bowl',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
      dateAdded: '2023-08-10',
    },
  ];

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Profile Updated',
      description: 'Your profile information has been saved successfully.',
    });
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast({
        title: 'Passwords do not match',
        description: 'Please ensure your new password and confirmation match.',
        variant: 'destructive',
      });
      return;
    }
    
    if (!currentPassword || !newPassword) {
      toast({
        title: 'Missing information',
        description: 'Please fill in all password fields.',
        variant: 'destructive',
      });
      return;
    }
    
    toast({
      title: 'Password Updated',
      description: 'Your password has been changed successfully.',
    });
    
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const removeFavorite = (id: number) => {
    toast({
      title: 'Recipe Removed',
      description: 'Recipe has been removed from favorites.',
    });
  };

  return (
    <Layout>
      <div className="py-12 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>
          
          <Tabs defaultValue="personal-info" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="personal-info" className="flex items-center space-x-2">
                <User size={16} />
                <span>Personal Info</span>
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex items-center space-x-2">
                <Heart size={16} />
                <span>Favorites</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center space-x-2">
                <Settings size={16} />
                <span>Settings</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal-info">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSaveProfile} className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="full-name">Full Name</Label>
                          <Input 
                            id="full-name" 
                            value={fullName} 
                            onChange={(e) => setFullName(e.target.value)} 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                          />
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <h3 className="text-lg font-medium mb-3">Cooking Preferences</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="dietary-preference">Dietary Preference</Label>
                            <Select value={dietaryPreference} onValueChange={setDietaryPreference}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select dietary preference" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="none">No specific diet</SelectItem>
                                <SelectItem value="vegetarian">Vegetarian</SelectItem>
                                <SelectItem value="vegan">Vegan</SelectItem>
                                <SelectItem value="pescatarian">Pescatarian</SelectItem>
                                <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                                <SelectItem value="dairy-free">Dairy-Free</SelectItem>
                                <SelectItem value="keto">Keto</SelectItem>
                                <SelectItem value="paleo">Paleo</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="favorite-cuisine">Favorite Cuisine</Label>
                            <Select value={favoriteCuisine} onValueChange={setFavoriteCuisine}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select favorite cuisine" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="italian">Italian</SelectItem>
                                <SelectItem value="mexican">Mexican</SelectItem>
                                <SelectItem value="indian">Indian</SelectItem>
                                <SelectItem value="chinese">Chinese</SelectItem>
                                <SelectItem value="japanese">Japanese</SelectItem>
                                <SelectItem value="thai">Thai</SelectItem>
                                <SelectItem value="mediterranean">Mediterranean</SelectItem>
                                <SelectItem value="american">American</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button type="submit" className="bg-cookblue-500 hover:bg-cookblue-600">
                      Save Changes
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="favorites">
              <Card>
                <CardHeader>
                  <CardTitle>Favorite Recipes</CardTitle>
                </CardHeader>
                <CardContent>
                  {favoriteRecipes.length === 0 ? (
                    <p className="text-center py-6 text-gray-500">
                      You haven't saved any favorite recipes yet.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {favoriteRecipes.map((recipe) => (
                        <Card key={recipe.id} className="overflow-hidden">
                          <div className="relative h-40">
                            <img 
                              src={recipe.image} 
                              alt={recipe.title} 
                              className="w-full h-full object-cover"
                            />
                            <button 
                              className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white"
                              onClick={() => removeFavorite(recipe.id)}
                            >
                              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                            </button>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-medium mb-1 line-clamp-1">{recipe.title}</h3>
                            <p className="text-sm text-gray-500">Added: {recipe.dateAdded}</p>
                            <Button 
                              variant="link" 
                              className="text-cookblue-500 p-0 h-auto mt-2"
                              onClick={() => {
                                toast({
                                  title: "Recipe Opened",
                                  description: `Viewing ${recipe.title}`,
                                });
                              }}
                            >
                              View Recipe
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleChangePassword} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input 
                          id="current-password" 
                          type="password" 
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input 
                          id="new-password" 
                          type="password" 
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input 
                          id="confirm-password" 
                          type="password" 
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="bg-cookblue-500 hover:bg-cookblue-600">
                      Update Password
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
