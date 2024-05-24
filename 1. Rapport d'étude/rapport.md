# Rapport d'Étude Comparée des Systèmes de Gestion de Base de Données NoSQL

## Consignes

Vous devez mener une étude de ces 4 outils :

- Amazon DynamoDB
- MongoDB
- Apache Cassandra
- Un autre SGBD non relationnel de votre choix

afin d'identifier celui qui répondra le mieux à vos besoins.

## Sommaire

- [Introduction](#introduction)
- [1. Amazon DynamoDB](#1-amazon-dynamodb)
  - [Caractéristiques de DynamoDB](#caractéristiques-de-dynamodb)
  - [Performances de DynamoDB](#performances-de-dynamodb)
  - [Cas d'utilisation de DynamoDB](#cas-dutilisation-de-dynamodb)
  - [Limitations de DynamoDB](#limitations-de-dynamodb)
- [2. MongoDB](#2-mongodb)
  - [Caractéristiques de MongoDB](#caractéristiques-de-mongodb)
  - [Performances de MongoDB](#performances-de-mongodb)
  - [Cas d'utilisation de MongoDB](#cas-dutilisation-de-mongodb)
  - [Limitations de MongoDB](#limitations-de-mongodb)
- [3. Apache Cassandra](#3-apache-cassandra)
  - [Caractéristiques de Cassandra](#caractéristiques-de-cassandra)
  - [Performances de Cassandra](#performances-de-cassandra)
  - [Cas d'utilisation de Cassandra](#cas-dutilisation-de-cassandra)
  - [Limitations de Cassandra](#limitations-de-cassandra)
- [4. Couchbase](#4-couchbase)
  - [Caractéristiques de Couchbase](#caractéristiques-de-couchbase)
  - [Performances de Couchbase](#performances-de-couchbase)
  - [Cas d'utilisation de Couchbase](#cas-dutilisation-de-couchbase)
  - [Limitations de Couchbase](#limitations-de-couchbase)
- [Conclusion](#conclusion)

## Introduction

Les systèmes de gestion de base de données NoSQL ont gagné en popularité grâce à leur capacité à gérer de grandes quantités de données non structurées ou semi-structurées, leur évolutivité horizontale et leurs performances élevées. Cette étude compare quatre SGBD NoSQL majeurs : DynamoDB, MongoDB, Cassandra et Couchbase. Nous analyserons leurs caractéristiques, performances, cas d'utilisation et limitations pour déterminer lequel répond le mieux à nos besoins.

## 1. Amazon DynamoDB

### Caractéristiques de DynamoDB

- **Type** : Clé-valeur et Document
- **Scalabilité** : Automatique avec scalabilité horizontale
- **Modèle de données** : Tables, Items et Attributs
- **Consistance** : Éventuellement consistant ou fortement consistant (configurable)
- **Transactions** : Support des transactions ACID
- **Intégration** : Intégration native avec les services AWS
- **Sécurité** : Chiffrement au repos et en transit, IAM pour la gestion des accès

### Performances de DynamoDB

- **Latence** : Très faible latence pour les opérations de lecture/écriture
- **Débit** : Débit ajustable avec capacité provisionnée ou à la demande

### Cas d'utilisation de DynamoDB

- Applications nécessitant une latence très faible
- Systèmes de gestion de sessions utilisateurs
- E-commerce, jeux en ligne, IoT

### Limitations de DynamoDB

- Dépendance à AWS, ce qui peut entraîner un verrouillage fournisseur
- Coût potentiellement élevé pour des charges de travail élevées et imprévisibles
- Complexité de gestion des index secondaires

## 2. MongoDB

### Caractéristiques de MongoDB

- **Type** : Document
- **Scalabilité** : Manuelle avec scalabilité horizontale via le sharding
- **Modèle de données** : Documents JSON (BSON)
- **Consistance** : Modèle de consistance configurable (fortement consistant par défaut)
- **Transactions** : Support des transactions ACID depuis la version 4.0
- **Intégration** : Supporte de nombreux langages de programmation et frameworks
- **Sécurité** : Chiffrement au repos et en transit, contrôle d'accès basé sur les rôles

### Performances de MongoDB

- **Latence** : Faible latence pour les opérations de lecture/écriture
- **Débit** : Dépend de la configuration matérielle et de l'architecture du sharding

### Cas d'utilisation de MongoDB

- Applications nécessitant une flexibilité du schéma
- Systèmes de gestion de contenu (CMS)
- Applications analytiques et de big data

### Limitations de MongoDB

- Complexité de la configuration et de la gestion du sharding
- Utilisation élevée de la mémoire pour les index

## 3. Apache Cassandra

### Caractéristiques de Cassandra

- **Type** : Clé-valeur et Colonnes
- **Scalabilité** : Automatique avec scalabilité horizontale
- **Modèle de données** : Tables, Clés et Valeurs
- **Consistance** : Éventuellement consistant (configurable avec différents niveaux de consistance)
- **Transactions** : Support limité des transactions ACID
- **Intégration** : Bien intégré avec l'écosystème Big Data (Hadoop, Spark)
- **Sécurité** : Chiffrement au repos et en transit, contrôle d'accès

### Performances de Cassandra

- **Latence** : Faible latence pour les écritures
- **Débit** : Très élevé pour les opérations de lecture/écriture

### Cas d'utilisation de Cassandra

- Applications nécessitant une haute disponibilité et une tolérance aux pannes
- Applications IoT, recommandations en temps réel
- Systèmes de gestion de grandes quantités de données

### Limitations de Cassandra

- Complexité de la modélisation des données
- Difficulté de gestion des transactions ACID

## 4. Couchbase

### Caractéristiques de Couchbase

- **Type** : Document et Clé-valeur
- **Scalabilité** : Automatique avec scalabilité horizontale
- **Modèle de données** : Documents JSON
- **Consistance** : Fortement consistant pour les lectures, éventuellement consistant pour les écritures
- **Transactions** : Support des transactions ACID
- **Intégration** : Intégration avec des outils Big Data et de traitement en temps réel
- **Sécurité** : Chiffrement au repos et en transit, contrôle d'accès basé sur les rôles

### Performances de Couchbase

- **Latence** : Faible latence pour les opérations de lecture/écriture
- **Débit** : Débit élevé avec des capacités de mise en cache intégrées

### Cas d'utilisation de Couchbase

- Applications nécessitant des performances élevées et une faible latence
- Applications mobiles et interactives
- Stockage et récupération de documents JSON

### Limitations de Couchbase

- Configuration et gestion peuvent être complexes
- Consistance éventuellement pour les opérations d'écriture

## Conclusion

Après avoir comparé DynamoDB, MongoDB, Cassandra et Couchbase, nous recommandons MongoDB comme le choix optimal pour les raisons suivantes :

1. **Flexibilité du Modèle de Données** : MongoDB offre une grande flexibilité grâce à son modèle de données basé sur des documents JSON, ce qui permet une évolution facile du schéma sans impact majeur sur les applications.

2. **Transactions ACID** : Depuis la version 4.0, MongoDB supporte les transactions ACID, ce qui garantit l'intégrité des données pour des opérations complexes.

3. **Écosystème et Intégration** : MongoDB bénéficie d'un large écosystème de bibliothèques et d'outils, facilitant son intégration avec divers langages de programmation et frameworks.

4. **Communauté et Support** : MongoDB dispose d'une vaste communauté de développeurs et d'un support professionnel disponible, ce qui est un atout majeur pour la résolution de problèmes et l'implémentation de solutions.

5. **Performance et Scalabilité** : Bien que la gestion du sharding puisse être complexe, MongoDB offre des solutions robustes pour la scalabilité horizontale et des performances élevées adaptées à une grande variété de cas d'utilisation.

**MongoDB représente donc le meilleur compromis entre flexibilité, performance, et support des transactions ACID, répondant ainsi de manière optimale à nos besoins.**
