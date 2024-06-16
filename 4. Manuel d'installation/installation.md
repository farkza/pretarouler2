# Manuel d'installation de l'application de location de voiture

Ce guide vous explique comment installer l'application de location de voiture sur votre machine locale Windows, macOS ou Linux en utilisant Docker pour la gestion des conteneurs, MongoDB pour la base de données, ReactJS pour le frontend et Python pour le backend.

## Table des matières

1. [Prérequis](#prérequis)
2. [Installation de Docker](#installation-de-docker)
   - [Windows](#installation-de-docker-sur-windows)
   - [macOS](#installation-de-docker-sur-macos)
   - [Linux](#installation-de-docker-sur-linux)
3. [Clonage du Répertoire Git](#clonage-du-répertoire-git)
4. [Installation du Backend Python](#installation-du-backend-python)
5. [Installation du Frontend ReactJS](#installation-du-frontend-reactjs)
6. [Initialisation de la Base de Données MongoDB](#initialisation-de-la-base-de-données-mongodb)
7. [Exécution de l'application](#exécution-de-lapplication)

## Prérequis

Avant de commencer, assurez-vous d'avoir :

- Un ordinateur Windows, macOS ou Linux avec une connexion Internet.
- Des droits d'administration sur votre ordinateur.

## Installation de Docker

### Installation de Docker sur Windows

1. **Téléchargement de Docker :**
   - Rendez-vous sur le [site officiel de Docker](https://www.docker.com/products/docker-desktop) et téléchargez Docker Desktop pour Windows.
   - Suivez les instructions d'installation fournies.

2. **Vérification de l'installation :**
   - Ouvrez PowerShell ou Command Prompt.
   - Tapez la commande suivante pour vérifier l'installation de Docker :

     ```bash
     docker --version
     ```

### Installation de Docker sur macOS

1. **Téléchargement de Docker :**
   - Rendez-vous sur le [site officiel de Docker](https://www.docker.com/products/docker-desktop) et téléchargez Docker Desktop pour macOS.
   - Suivez les instructions d'installation fournies.

2. **Vérification de l'installation :**
   - Ouvrez le Terminal.
   - Tapez la commande suivante pour vérifier l'installation de Docker :

     ```bash
     docker --version
     ```

### Installation de Docker sur Linux

1. **Téléchargement et installation de Docker :**
   - Ouvrez le Terminal et exécutez les commandes suivantes pour installer Docker :

     ```bash
     sudo apt-get update
     sudo apt-get install -y docker.io
     ```

2. **Démarrage de Docker :**
   - Exécutez la commande suivante pour démarrer Docker :

     ```bash
     sudo systemctl start docker
     ```

3. **Vérification de l'installation :**
   - Tapez la commande suivante pour vérifier l'installation de Docker :

     ```bash
     docker --version
     ```

## Clonage du Répertoire Git

1. **Clonage du Projet :**
   - Ouvrez un terminal.
   - Clonez le dépôt du projet depuis GitHub :

     ```bash
     git clone https://github.com/farkza/pretarouler.git
     ```

   - Accédez au répertoire du projet cloné :

     ```bash
     cd pretarouler
     ```

## Installation du Backend Python

1. **Création de l'environnement virtuel :**
   - Accédez au répertoire backend :

     ```bash
     cd 3.Code\ source/backend
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

   - Sur macOS/Linux :

     ```bash
     source venv/bin/activate
     ```

3. **Installation des dépendances :**
   - Installez les dépendances Python nécessaires :

     ```bash
     pip install -r requirements.txt
     ```

## Installation du Frontend ReactJS

1. **Installation des dépendances :**
   - Accédez au répertoire frontend :

     ```bash
     cd ../frontend
     ```

   - Installez les dépendances nécessaires avec npm :

     ```bash
     npm install
     ```

## Initialisation de la Base de Données MongoDB

1. **Démarrage de MongoDB :**
   - Ouvrez Docker.
   - Exécutez la commande suivante pour démarrer un conteneur MongoDB :

     ```bash
     docker run -d --name mongodb -p 27017:27017 mongo
     ```

2. **Initialisation des Données MongoDB :**
   - Créez un script `init-mongo.sh` avec le contenu suivant :

     ```bash
     #!/bin/bash
     echo "Restoring MongoDB databases..."

     mongorestore --host localhost --port 27017 --db pretarouler /docker-entrypoint-initdb.d/mongo_dump/cars.bson
     mongorestore --host localhost --port 27017 --db pretarouler /docker-entrypoint-initdb.d/mongo_dump/users.bson
     mongorestore --host localhost --port 27017 --db pretarouler /docker-entrypoint-initdb.d/mongo_dump/reservations.bson

     echo "MongoDB databases restored."
     ```

   - Exécutez le script pour restaurer les données :

     ```bash
     chmod +x init-mongo.sh
     ./init-mongo.sh
     ```

## Exécution de l'application

1. **Démarrage du Backend :**
   - Ouvrez un terminal.
   - Accédez au répertoire backend :

     ```bash
     cd ../backend
     ```

   - Activez l'environnement virtuel :

     ```bash
     source venv/bin/activate  # macOS/Linux
     # venv\Scripts\activate  # Windows
     ```

   - Lancez le serveur Python :

     ```bash
     uvicorn main:app --reload
     ```

2. **Démarrage du Frontend :**
   - Ouvrez un autre terminal.
   - Accédez au répertoire frontend :

     ```bash
     cd ../frontend
     ```

   - Lancez l'application ReactJS :

     ```bash
     npm start
     ```

3. **Accès à l'application :**
   - Ouvrez votre navigateur Web.
   - Accédez à l'URL suivante pour utiliser l'application :

     ```bash
     http://localhost:3000
     ```
