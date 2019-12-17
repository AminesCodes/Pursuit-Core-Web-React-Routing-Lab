# [Pursuit-Core-Web-React-Routing-Lab](https://github.com/joinpursuit/Pursuit-Core-Web-React-Routing-Lab)

## Fetching Cats and Dogs

We've already used the [Dog API](https://dog.ceo/dog-api/) to get the image of a single, completely random dog. However, today we're doing something a little different. Today, we are creating a full-fledged app to fulfill all of your pet-image-searching desires: both cats and dogs.

Use the [Cat API](https://thecatapi.com/) for you cat-fetching needs.

This app, naturally, will have _routes_.

## Part 1: Route Structure and How This App Is Different

For the most part we have been **centralizing state** (usually in App) and passing it down to child components via props. That's good! However, this app is a little different.

We are making the conscious decision that we **don't want** to centralize state. Instead of one big app, our app is going to be more like a couple of tiny apps inside different routes.

These apps will be:

- **Random dog image** `/dog/random` - We've done this one before. Load a random dog image. Include a button that loads a new random image when clicked.

- **Multiple random dogs** `/dog/random/:num` - This will render the number of random dog images requested for in the `num` URL parameter. No button required.

- **Random dog by breed** `/dog/:breed` - This will render a dog image of the specified breed.

- **Random cat image** `/cat/random`. Load a random cat image. Include a button that loads a new random image when clicked.

- **Multiple random cats** `/cat/random/:num` - This will render the number of random cat images requested for in the `num` URL parameter. No button required.

### Bonus

- **Random amounts of both cats and dogs** `/all/random`. Load a random number(between 1 and 10) of cats AND dogs. (e.g 4 cats and 5 dogs).

### Final Notes

These routes will each **keep their own state**. They don't have to interact with each other, because (theoretically) a user looking for a picture of a bulldog does not need to see a picture of a random dog.

**If we are making this decision well in advance as a deliberate architectural move, it's fine to not have a centralized state.** We should just keep in mind that, should we try to add more granular functionality after the fact, we may be in for a bad time.
