# Manuel d'installation de l'application de location de voiture

Ce manuel fournit des instructions détaillées pour installer l'ensemble de l'application de location de voiture sur une machine virtuelle Windows ou Linux en utilisant Docker pour la gestion des conteneurs, MongoDB Compass pour l'interface graphique de MongoDB, ReactJS pour le frontend et Python pour le backend.

## Table des matières

1. [Prérequis](#prérequis)
2. [Installation de Docker](#installation-de-docker)
3. [Installation de MongoDB Compass](#installation-de-mongodb-compass)
4. [Clonage du Répertoire Git](#clonage-du-répertoire-git)
5. [Installation du Backend Python](#installation-du-backend-python)
6. [Installation du Frontend ReactJS](#installation-du-frontend-reactjs)
7. [Exécution de l'application](#exécution-de-lapplication)

## Prérequis

Avant de commencer l'installation, assurez-vous d'avoir les éléments suivants :

- Une machine virtuelle Windows ou Linux avec une connexion Internet.
- Droits d'administration sur la machine virtuelle.

## Installation de Docker

1. **Téléchargement de Docker :**
   - Rendez-vous sur le site officiel de Docker et téléchargez la version appropriée pour votre système d'exploitation.
   - Suivez les instructions d'installation pour installer Docker.

2. **Vérification de l'installation :**
   - Ouvrez un terminal (Command Prompt sur Windows ou Terminal sur Linux).
   - Tapez la commande suivante pour vérifier que Docker est correctement installé :

     ```bash
     docker --version
     ```

## Installation de MongoDB Compass

1. **Téléchargement de MongoDB Compass :**
   - Rendez-vous sur le site officiel de MongoDB et téléchargez MongoDB Compass.
   - Suivez les instructions d'installation pour votre système d'exploitation.

## Clonage du Répertoire Git

1. **Clonage du Projet :**
   - Ouvrez un terminal.
   - Clonez le dépôt du projet à partir de GitHub :

     ```bash
     git clone https://github.com/farkza/pretarouler.git
     ```

   - Accédez au répertoire du projet cloné :

     ```bash
     cd votre-projet
     ```

## Installation du Backend Python

1. **Création de l'environnement virtuel :**
   - Accédez au répertoire backend :

     ```bash
     cd 3.Code source/backend
     ```

   - Créez un environnement virtuel Python :

     ```bash
     python -m venv venv
     ```

2. **Activation de l'environnement virtuel :**
   - Sur Windows :

     ```bash
     venv\Scripts\activate
     ```

   - Sur Linux :

     ```bash
     source venv/bin/activate
     ```

3. **Installation des dépendances :**
   - Installez les dépendances Python requises :

     ```bash
     pip install -r requirements.txt
     ```

## Installation du Frontend ReactJS

1. **Installation des dépendances :**
   - Accédez au répertoire frontend :

     ```bash
     cd 3.Code source/frontend
     ```

   - Installez les dépendances nécessaires avec npm :

     ```bash
     npm install
     ```

## Exécution de l'application

1. **Démarrage de MongoDB :**
   - Ouvrez Docker.
   - Exécutez la commande suivante pour démarrer un conteneur MongoDB :

     ```bash
     docker run -d --name mongodb -p 27017:27017 mongo
     ```

2. **Démarrage du Backend :**
   - Ouvrez un terminal.
   - Accédez au répertoire backend :

     ```bash
     cd 3.Code source/backend
     ```

   - Activez l'environnement virtuel :

     ```bash
     source venv/bin/activate  # Linux
     # venv\Scripts\activate  # Windows
     ```

   - Lancez le serveur Python :

     ```bash
     uvicorn main:app --reload
     ```

3. **Démarrage du Frontend :**
   - Ouvrez un autre terminal.
   - Accédez au répertoire frontend :

     ```bash
     cd 3.Code source/frontend
     ```

   - Lancez l'application ReactJS :

     ```bash
     npm start
     ```

4. **Accès à l'application :**
   - Ouvrez un navigateur Web.
   - Accédez à l'URL suivante pour utiliser l'application :

     ```bash
     http://localhost:3000
     ```
