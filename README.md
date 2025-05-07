# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

**Gaurav Nair**
**Parwiz Khan**

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not?

Answer:
No, I would not use a unit test to test the full “message” feature because it likely involves multiple components interacting—such as the UI, network communication, message queues, and databases. This makes it more suitable for integration testing or end-to-end (E2E) testing, which can evaluate the full workflow and data flow between components. Unit tests are best for isolated logic, not multi-layer features.

⸻

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?

Answer:
Yes, I would use a unit test to test the “max message length” feature. This is a self-contained validation rule that checks the length of user input. It can be tested independently of other parts of the app to ensure that messages over 80 characters are correctly rejected or truncated. Unit testing is ideal for this kind of input validation logic.

### GitHub Pages Links

- [Expose Page](https://gauravn17.github.io/Lab5_Starter/expose.html)
- [Explore Page](https://gauravn17.github.io/Lab5_Starter/explore.html)


