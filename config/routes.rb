Rails.application.routes.draw do
  scope "(:locale)", locale: /en|es/ do
    # Define your routes here
    root 'pages#home'
    get 'about', to: 'pages#about'
    get 'projects', to: 'pages#projects'
  end
end