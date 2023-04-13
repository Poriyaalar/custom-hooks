# **Custom React Hooks**

The following are examples of custom React hooks created by "@poriyaalar/custom-hooks" library. Below is the explanation of each hook with its respective code.

## **Installation**

```
npm install @poriyaalar/custom-hooks
```

or

```
npm i @poriyaalar/custom-hooks
```

## **Usage**

### **1. useEventListener(event,handler,ref)**

| Parameter | Mandatory |   Type   |                        Description                         |
| :-------: | :-------: | :------: | :--------------------------------------------------------: |
|   event   |    Yes    |  event   |           Require the Event name as String Type            |
|  handler  |    Yes    | Function |            Callback Function receive the event             |
|    ref    | Optional  |   ref    | Optional, Require the reference of the HTML or JSX Element |

This hook attaches an event listener to a specified element using a ref. When the event occurs on the element, the specified handler function is executed.

returns the event from the given Element.

**_Example:_**

```
import { useEventListener } from "@poriyaalar/custom-hooks";
function App() {
 const divRef = useRef();
 const listener = (e) => console.log(e);
 useEventListener("click", listener, divRef);
 return <div ref={divRef}/>
}
```

### **2.useElementSize(ref)**

This hook returns the size of a specified element using a ref.

| Parameter | Mandatory | Type |                   Description                    |
| :-------: | :-------: | :--: | :----------------------------------------------: |
|    ref    |    Yes    | ref  | Require the reference of the HTML or JSX Element |

**_Example:_**

```
import { useElementSize } from "@poriyaalar/custom-hooks";
function App() {
 const divRef = useRef();
 const size= useElementSize(divRef);
 console.log(size);
  return <div ref={divRef}/>
}
```

### **3. useCurrentPath()**

This hook returns the current URL path. Its worked only for **App.js** Wrapped by **Browser Router **or **Hash Router** if not install **react-router-dom**

**_Example:_**

```
import { useCurrentPath } from "@poriyaalar/custom-hooks";
function App() {
 const path= useCurrentPath();
 console.log(path);
}
```

### **4. useInterval(callback,delay,stop)**

This hook repeatedly calls a function with a specified delay.and optional stop function return boolean

| Parameter | Mandatory |     Type     |                                Description                                |
| :-------: | :-------: | :----------: | :-----------------------------------------------------------------------: |
| callback  |    Yes    |   Function   |           Require the Function to be Execute on Every Interval            |
|   delay   |    Yes    | Milliseconds |             set the interval delay for execute Function again             |
|   stop    | Optional  |   Function   | Optional, Require the Callback Function ,it require to return the boolean |

no return value : **void**,

**_Example:_**

```
import { useInterval } from "@poriyaalar/custom-hooks";
function App() {
  useInterval(() => {
    console.log("check Interval");
  }, 3000,() => true);
}
```

### **5. useLocalStorage(key,defaultValue)**

|  Parameter   | Mandatory |  Type  |                                                    Description                                                    |
| :----------: | :-------: | :----: | :---------------------------------------------------------------------------------------------------------------: |
|     key      |    Yes    | String |                                   Required any Value for name or id of the Data                                   |
| defaultValue |    Yes    |  any   | Required any String or Array or Object or Array of Objects to store in the browser Local storage, JSX not allowed |

This hook allows you to store and retrieve data from the browser's localStorage API. It takes a key and an initial value as parameters and returns an array containing the current value and a setter function.

returns the data in the browser's Local storage.

**_Example:_**

```
import { useLocalStorage } from "@poriyaalar/custom-hooks";
function App() {
const [value, setValue] = useLocalStorage("data", { name: "Test" });

const setToLocalStorage = () => {
 setValue({ name: "Poriyaalar" });
};
setToLocalStorage();
}
```

### **6. useLocalStorageValue(key)**

| Parameter | Mandatory |  Type  |                  Description                  |
| :-------: | :-------: | :----: | :-------------------------------------------: |
|    key    |    Yes    | String | Required any Value for name or id of the Data |

This hook provides a way to get the data in the browser's local storage. It returns stored values.

**_Example:_**

```
import { useLocalStorageValue } from "@poriyaalar/custom-hooks";
function App() {
const value = useLocalStorageValue("data");
console.log(value)
}
```

### **7. useSetLocalStorage(key,defaultValue)**

|  Parameter   | Mandatory |  Type  |                                                    Description                                                    |
| :----------: | :-------: | :----: | :---------------------------------------------------------------------------------------------------------------: |
|     key      |    Yes    | String |                                   Required any Value for name or id of the Data                                   |
| defaultValue |    Yes    |  any   | Required any String or Array or Object or Array of Objects to store in the browser Local storage, JSX not allowed |

This hook provides a way to store data in the browser's local storage. Its not returns any array values: the current value stored in window storage and a function to set a new value.

no return value : **void**

**_Example:_**

```
import { useSetLocalStorage } from "@poriyaalar/custom-hooks";
function App() {
const [setValue] = useSetLocalStorage("data", { name: "Test" });

const setToLocalStorage = () => {
 setValue({ name: "Poriyaalar" });
};
setToLocalStorage();
}
```

### **8. useGlobalStorage(key,defaultValue)**

|  Parameter   | Mandatory |  Type  |                                                    Description                                                     |
| :----------: | :-------: | :----: | :----------------------------------------------------------------------------------------------------------------: |
|     key      |    Yes    | String |                                   Required any Value for name or id of the Data                                    |
| defaultValue |    Yes    |  any   | Required any String or Array or Object or Array of Objects to store in the browser Window storage, JSX not allowed |

This hook provides a way to store data and get the data in the browser's window storage. It returns an array with two values: the current value stored in window storage and a function to set a new value.

**_Example:_**

```
import { useGlobalStorage } from "@poriyaalar/custom-hooks";
function App() {
const [value, setValue] = useGlobalStorage("data", { name: "Test" });

const setToGlobalStorage = () => {
 setValue({ name: "Poriyaalar" });
};
setToGlobalStorage();
}
```

### **9. useGlobalStorageValue(key)**

| Parameter | Mandatory |  Type  |                  Description                  |
| :-------: | :-------: | :----: | :-------------------------------------------: |
|    key    |    Yes    | String | Required any Value for name or id of the Data |

This hook provides a way to get the data in the browser's window storage. It returns stored values.

**_Example:_**

```
import { useGlobalStorageValue } from "@poriyaalar/custom-hooks";
function App() {
const value = useGlobalStorageValue("data");
console.log(value)
}
```

### **10. useSetGlobalStorage(key,defaultValue)**

|  Parameter   | Mandatory |  Type  |                                                    Description                                                     |
| :----------: | :-------: | :----: | :----------------------------------------------------------------------------------------------------------------: |
|     key      |    Yes    | String |                                   Required any Value for name or id of the Data                                    |
| defaultValue |    Yes    |  any   | Required any String or Array or Object or Array of Objects to store in the browser Window storage, JSX not allowed |

This hook provides a way to store data in the browser's window storage. Its not returns any array values: the current value stored in window storage and a function to set a new value.

no return value : **void**

**_Example:_**

```
import { useSetGlobalStorage } from "@poriyaalar/custom-hooks";
function App() {
const [setValue] = useSetGlobalStorage("data", { name: "Test" });

const setToGlobalStorage = () => {
  setValue({ name: "Poriyaalar" });
};
setToGlobalStorage();
}
```

### **11. useMediaQuery(mediaQuery)**

| Parameter  | Mandatory |  Type  |             Description              |
| :--------: | :-------: | :----: | :----------------------------------: |
| mediaQuery |    Yes    | string | Require the String Contain the query |

This hook which listens for a media query and updates the state when the query is true/false

returns the boolean value **true** or **false**.

**_Example:_**

```
import { useMediaQuery } from "@poriyaalar/custom-hooks";
function App() {
  const isMobileMin = useMediaQuery("(min-width:320px)");
}
```

### **12. useResponsive()**

This hook which listens for a media query and updates the state when the query is true/false

returns the object contains the device type with the value of boolean.

**_Example:_**

```
import { useResponsive } from "@poriyaalar/custom-hooks";
function App() {
  const deviceType = useResponsive();
}
```
