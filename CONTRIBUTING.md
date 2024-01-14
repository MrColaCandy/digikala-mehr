# Tips for adding icons

### Installation

To use <a>React-Icons</a> in your project, you need to install it as a dependency. Run the following command in your
project directory:

```bash
npm install @react-icons/all-files
# or
yarn add @react-icons/all-files
## Code of Conduct
```


## How to Contribute

```
import { FaCoffee } from 'react-icons/fa';
```

```
import { FaHeart } from 'react-icons/fa';

const MyComponent = () => {
  return (
    <div>
      <p>Love is in the air: <FaHeart/></p>
    </div>
  );
};
```

### or

```
import { FaHeart } from 'react-icons/fa';

const MyComponent = () => {
  return (
    <div>
         <FaHeart size="20px" color="#54a0ff"/>
    </div>
  );
};
```

### You can use the following method to give special styles to the icons
```
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const MyComponent = () => {
  let iconStyles = { color: "white", fontSize: "1.5em" };
  return (
    <div>
        <FaFacebookF style={iconStyles} />
        <FaInstagram style={iconStyles} />
    </div>
  );
};
```


