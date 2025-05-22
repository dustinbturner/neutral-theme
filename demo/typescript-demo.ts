// TypeScript Demo File for Neutral Theme
// This file showcases various TypeScript features and syntax highlighting

import { useState, useEffect } from 'react';
import axios from 'axios';

// Type definitions
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  preferences?: UserPreferences;
};

interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
  language: string;
}

// Enum example
enum NotificationType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success',
}

// Generic function
function filterItems<T>(items: T[], predicate: (item: T) => boolean): T[] {
  return items.filter(predicate);
}

// Class with decorators
@Component({
  selector: 'app-user-profile',
  template: '<div>{{user.name}}</div>'
})
class UserProfileComponent {
  @Input() user!: User;
  
  private notificationService: NotificationService;
  
  constructor(notificationService: NotificationService) {
    this.notificationService = notificationService;
  }
  
  @HostListener('click')
  onClick(): void {
    console.log(`User ${this.user.name} profile clicked`);
    this.notificationService.show(NotificationType.INFO, 'Profile viewed');
  }
  
  // Method with parameter types and return type
  public getUserStatus(): string {
    return this.user.isActive ? 'Active' : 'Inactive';
  }
}

// Async/await with TypeScript
async function fetchUserData(userId: number): Promise<User> {
  try {
    const response = await axios.get<User>(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error('Failed to fetch user data');
  }
}

// React functional component with TypeScript
const UserProfile: React.FC<{ userId: number }> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // IIFE for async operation
    (async () => {
      try {
        setLoading(true);
        const userData = await fetchUserData(userId);
        setUser(userData);
      } catch (err) {
        setError('Failed to load user profile');
      } finally {
        setLoading(false);
      }
    })();
  }, [userId]);

  // Conditional rendering with TypeScript
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  // Object destructuring with default values
  const { theme = 'system', notifications = true } = user.preferences || {};

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Status: {user.isActive ? 'Active' : 'Inactive'}</p>
      <div className="preferences">
        <h3>Preferences</h3>
        <ul>
          <li>Theme: {theme}</li>
          <li>Notifications: {notifications ? 'Enabled' : 'Disabled'}</li>
        </ul>
      </div>
    </div>
  );
};

// Type utilities and mapped types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

// Example usage of utility types
const userTemplate: Readonly<Optional<User>> = {
  name: 'Guest User',
};

export { UserProfileComponent, UserProfile, fetchUserData, filterItems };