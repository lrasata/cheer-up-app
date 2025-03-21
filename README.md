# Cheer-up is a React + Vite web application
This is a small and simple web application which randomly shows a very cute picture of a cat or dog to cheer you up.

It used APIs provided by [TheCatAPI](https://thecatapi.com/) and [TheDogAPI](https://thedogapi.com/)

The main purpose for this project is to quickly build a small and simple react app which can be used for deployment training.

![cheer-up-app-image](/docs/cheer-up.png)

## Prerequisites
To run this app you may need to get your FREE API keys from [TheCatAPI](https://thecatapi.com/) and [TheDogAPI](https://thedogapi.com/) which have to be provided in the `.env`

```
VITE_DOG_API_URL=https://api.thedogapi.com/v1/images/search
VITE_DOG_API_KEY=your_dog_api_key
VITE_CAT_API_URL=https://api.thecatapi.com/v1/images/search
VITE_CAT_API_KEY=your_cat_api_key
```

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`


To Start Server:

`npm run dev`

To Visit App:

`http://localhost:5173/`

## Deployment
AWS amplify packages has been installed in this project for testing purposes


## Future improvements
- [ ] extend app to be full stack and integrate authenticated user experience so user can save images as favorites