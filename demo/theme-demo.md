# Neutral Theme Demo

This file showcases the various syntax highlighting features of the Neutral Theme for Zed.

## JavaScript Example

```javascript
// Comment in JavaScript
import React, { useState, useEffect } from 'react';

/**
 * Multiline comment
 * to showcase comment styling
 */
const calculateTotal = (items) => {
  return items
    .filter(item => !item.deleted)
    .reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Boolean, null, undefined
const isActive = true;
const isEmpty = false;
const nothing = null;
const notDefined = undefined;

// Numbers
const count = 42;
const price = 99.99;

// Strings
const greeting = "Hello, World!";
const template = `The total is ${calculateTotal(items)}`;

// Function with class
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false
    };
  }

  componentDidMount() {
    try {
      // Fetch data from API
      fetch('/api/cart')
        .then(response => response.json())
        .then(data => {
          this.setState({ items: data, loading: false });
        })
        .catch(error => console.error("Error fetching cart:", error));
    } catch (e) {
      console.error("Exception occurred:", e);
    }
  }
}
```

## Python Example

```python
import os
from typing import List, Dict, Optional
import numpy as np

# Python class with methods
class DataProcessor:
    """
    A class for processing data with various methods
    to demonstrate syntax highlighting.
    """
    
    def __init__(self, data_path: str):
        self.data_path = data_path
        self.data = None
        self._processed = False
    
    @property
    def is_processed(self) -> bool:
        return self._processed
    
    def load_data(self) -> np.ndarray:
        """Load data from file."""
        try:
            self.data = np.load(self.data_path)
            return self.data
        except FileNotFoundError:
            print(f"Error: File {self.data_path} not found")
            return np.array([])
    
    def process(self, normalize: bool = True) -> Optional[np.ndarray]:
        if self.data is None:
            self.load_data()
            
        if len(self.data) == 0:
            return None
            
        # Apply processing
        result = self.data.copy()
        
        if normalize:
            result = (result - result.mean()) / result.std()
            
        self._processed = True
        return result
```

## Rust Example

```rust
use std::collections::HashMap;
use std::sync::{Arc, Mutex};
use tokio::sync::mpsc;

/// A structure representing a user in the system
#[derive(Debug, Clone, PartialEq)]
pub struct User {
    id: u64,
    username: String,
    email: String,
    is_active: bool,
    login_count: u32,
}

impl User {
    // Constructor for User
    pub fn new(id: u64, username: &str, email: &str) -> Self {
        User {
            id,
            username: username.to_string(),
            email: email.to_string(),
            is_active: true,
            login_count: 0,
        }
    }

    // Method to increment login count
    pub fn increment_login(&mut self) {
        self.login_count += 1;
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut users = HashMap::new();
    
    // Adding some users
    users.insert(1, User::new(1, "alice", "alice@example.com"));
    users.insert(2, User::new(2, "bob", "bob@example.com"));
    
    // Shared state with thread safety
    let users = Arc::new(Mutex::new(users));
    
    // Channel for communication
    let (tx, mut rx) = mpsc::channel(100);
    
    // Spawn a task
    tokio::spawn(async move {
        while let Some(id) = rx.recv().await {
            println!("Processing user with ID: {}", id);
            
            // Lock the mutex to access the shared state
            let mut users_lock = users.lock().unwrap();
            
            // Check if user exists and update
            if let Some(user) = users_lock.get_mut(&id) {
                user.increment_login();
                println!("User {} login count: {}", user.username, user.login_count);
            }
        }
    });
    
    // Send some messages
    tx.send(1).await?;
    tx.send(2).await?;
    tx.send(1).await?;
    
    // Wait a bit for demonstration
    tokio::time::sleep(tokio::time::Duration::from_millis(100)).await;
    
    Ok(())
}
```

## HTML/CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neutral Theme Demo</title>
    <style>
        :root {
            --primary-color: #8b5cf6;
            --text-color: #f5f5f5;
            --bg-color: #171717;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
            padding: 2rem;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .container {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .card {
            background-color: #262626;
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .card:hover {
            transform: translateY(-2px);
            transition: transform 0.3s ease;
        }
        
        @media (max-width: 768px) {
            body {
                padding: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Neutral Theme Demo</h1>
            <p>A showcase of HTML and CSS with Neutral Theme styling</p>
        </header>
        
        <main>
            <section class="card">
                <h2>Features</h2>
                <ul>
                    <li>Clean, minimal design</li>
                    <li>Neutral color palette</li>
                    <li>Based on Tailwind colors</li>
                </ul>
            </section>
            
            <section class="card">
                <h2>Sample Form</h2>
                <form id="demo-form">
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </main>
        
        <footer>
            <p>&copy; 2023 Neutral Theme</p>
        </footer>
    </div>
    
    <script>
        document.getElementById('demo-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted!');
        });
    </script>
</body>
</html>
```

## JSON Example

```json
{
  "theme": {
    "name": "Neutral Theme",
    "version": "0.0.1",
    "author": "Dustin Turner",
    "description": "A clean, minimal theme for Zed editor",
    "settings": {
      "colors": {
        "background": "#171717",
        "foreground": "#f5f5f5",
        "accent": "#8b5cf6",
        "border": "#525252"
      },
      "darkMode": true,
      "variants": [
        "minimal",
        "standard",
        "contrast"
      ]
    },
    "supported_languages": [
      "javascript",
      "typescript",
      "python",
      "rust",
      "html",
      "css",
      "markdown",
      "json"
    ],
    "statistics": {
      "downloads": 1024,
      "stars": 42,
      "last_updated": "2023-05-31T10:15:30Z"
    }
  }
}
```

## SQL Example

```sql
-- Create a users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP WITH TIME ZONE
);

-- Create an index on username
CREATE INDEX idx_users_username ON users(username);

-- Insert some sample data
INSERT INTO users (username, email, password_hash)
VALUES 
    ('john_doe', 'john@example.com', 'hashed_password_1'),
    ('jane_smith', 'jane@example.com', 'hashed_password_2');

-- A complex query with joins and aggregation
SELECT 
    u.username,
    u.email,
    COUNT(p.id) AS post_count,
    MAX(p.created_at) AS last_post_date
FROM 
    users u
LEFT JOIN 
    posts p ON u.id = p.user_id
WHERE 
    u.is_active = TRUE
    AND p.created_at > NOW() - INTERVAL '30 days'
GROUP BY 
    u.id, u.username, u.email
HAVING 
    COUNT(p.id) > 5
ORDER BY 
    post_count DESC, last_post_date DESC
LIMIT 10;
```

This demo file includes examples of:

- JavaScript with React
- Python with NumPy
- Rust with async/await
- HTML/CSS
- JSON
- SQL

It covers various syntax elements including:
- Comments (single-line and multi-line)
- Functions and methods
- Classes and objects
- String literals (regular and template)
- Numbers and boolean values
- Keywords and operators
- Imports and includes
- Exception handling
- Variables and constants