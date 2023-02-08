const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#blog-name').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
  
    if (name && content) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ name, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create blog');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete blog');
      }
    }
  };
  
  document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);
    const { Model, DataTypes } = require('sequelize');
    const sequelize = require('../config/connection');
    
    class Blog extends Model {}
    
    Blog.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: DataTypes.STRING,
        },
        date_created: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        user_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
      }
    );
    
    module.exports = Blog;
    