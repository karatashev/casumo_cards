# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Casumo Frontend Developer Test

Casumo allows players to register multiple payment methods to make deposits easier.

---

## The Task

Your task is to implement a small app that helps users to add bank cards as payment methods.

The app should have three screens:

|  Screen  |                                                                        | Description              |
:--------- |:----------------------------------------------------------------------:|:------------------------- |
1          | <img src="./resources/screens/your-cards.png" width="150px" />         |  Show a list of the already registered bank cards. |
2          | <img src="./resources/screens/add-card-details.png" width="150px" />   |  Show a form for registering a new credit card. This form should appear when clicking the “Add new card” button.                         |
3          | <img src="./resources/screens/edit-card.png" width="150px" />          |  Show a form for editing an existing credit card. This form should appear when clicking on an existing credit card. |

---

## Form validation

The form for registering a new bank card has to validate if the card details are correct before submitting the form, or return an error otherwise.

|  State                                                                      | Description                                                              |
:---------------------------------------------------------------------------- |:------------------------------------------------------------------------ |
<img src="./resources/screens/add-card-details-success.png" width="150px" />  |  **Success:** <br> Show the successful state for the inputs according to the design. |
<img src="./resources/screens/add-card-details-error.png" width="150px" />    |  **Error:** <br> Show input validation errors according to the design. |

---

## The tools
Feel free to use whichever tools you like, although for the UI part we would prefer React.

Regarding persisting the data **we advise you not to build a backend service** for it but rather keep the data on the client.<br>
Use whichever data-layer you are comfortable with.

---

## Design tokens

Here at Casumo we have a crack team of designers that speak their own language. We’re sharing some of that here with you in the hope that it can help you create pixel perfection.

### Spacings
- `4px`
- `8px`
- `16px`
- `24px`
- `32px`
- `40px`
- `48px`
- `56px`

### Fonts
- [Circular Pro](./resources/lineto-circular-pro-book.woff2)

### Fonts-size
- `10px`
- `14px`
- `16px`
- `24px`
- `30px`

### Border-radius
- `16px`
- `24px`
- `100px`

### Colours

| HEX | Preview |
| ------- | ------- |
| `#4C00C2` | ![purple-60](https://via.placeholder.com/150x50/4C00C2/000000.webp?text=+) |
| `#32007E` | ![purple-90](https://via.placeholder.com/150x50/32007E/000000.webp?text=+) |
| `#3B058E` | ![purple](https://via.placeholder.com/150x50/3B058E/000000.webp?text=+) |
| `#E5E5E5` | ![background](https://via.placeholder.com/150x50/E5E5E5/000000.webp?text=+) |
| `#FFFFFF` | ![white](https://via.placeholder.com/150x50/FFFFFF/000000.webp?text=+) |
| `#D3D8E1` | ![grey-20](https://via.placeholder.com/150x50/D3D8E1/000000.webp?text=+) |
| `#798291` | ![grey-50](https://via.placeholder.com/150x50/798291/000000.webp?text=+) |
| `#444E5D` | ![grey-70](https://via.placeholder.com/150x50/444E5D/000000.webp?text=+) |
| `#1A212C` | ![grey-90](https://via.placeholder.com/150x50/1A212C/000000.webp?text=+) |
| `#19AC51` | ![green-30](https://via.placeholder.com/150x50/19AC51/000000.webp?text=+) |
| `#FC484C` | ![red-30](https://via.placeholder.com/150x50/FC484C/000000.webp?text=+) |

---

## Notes
- Consider the code you write to be production worthy
- Make sure that you include the version-control history for the project when you are sharing it with us
- We expect you to create your own solution rather than rely on 3rd party components.
- You can find all the assets [here](./resources)
- You can find all the app screens [here](./resources/screens)
