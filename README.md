Read Me - **Custom React Hooks**
The following are examples of custom React hooks created by "@poriyaalar/custom-hooks" library. Below is the explanation of each hook with its respective code.
**Installation**
``` npm install @poriyaalar/custom-hooks``` 
or 
```npm i @poriyaalar/custom-hooks  ```

***1. useEventListener***
This hook attaches an event listener to a specified element using a ref. When the event occurs on the element, the specified handler function is executed.
  ```
  useEventListener(event,handler,ref)
  ```
  Exmaple : ```
import { useEventListener } from "@poriyaalar/custom-hooks";
function App() {
  const divRef = useRef(); // create a Ref
  const listener = (e) => console.log(e); // Handler
  useEventListener("click", listener, divRef); // Listener
  return <div ref={divRef}/> // JSX
}```
  
2 .useElementSize
This hook returns the size of a specified element using a ref.

useElementSize(ref)
  
  Exmaple : 
import { useElementSize } from "@poriyaalar/custom-hooks";
function App() {
  const divRef = useRef(); // create a Ref
  const size= useElementSize(divRef); 
  console.log(size);
}

3 .useCurrentPath
This hook returns the current URL path.

useCurrentPath()
  
  Exmaple : 
import { useCurrentPath } from "@poriyaalar/custom-hooks";
function App() {
  const path= useCurrentPath(); 
  console.log(path);
}

4. useInterval
This hook repeatedly calls a function with a specified delay.

useInterval(callback,delay)
  
  Exmaple : 
import { useInterval } from "@poriyaalar/custom-hooks";
function App() {
  useInterval(() => {
    console.log("check Interval");
  }, 3000);

5. useLocalStorage 
This hook provides a way to store data  and get the data in the browser's local storage. It returns an array with two values: the current value stored in local storage and a function to set a new value.

useLocalStorage(key,defaultValue)
  
  Exmaple : 
import { useLocalStorage } from "@poriyaalar/custom-hooks";
function App() {
  const [value, setValue] = useLocalStorage("data", { name: "Test" });

  const setToLocalStorage = () => {
    setValue({ name: "Poriyaalar" });
  };
  setToLocalStorage();
}
6 .useLocalStorageValue 
This hook provides a way to  get the data in the browser's local storage. It returns  stored values.

useLocalStorageValue(key)
  
  Exmaple : 
import { useLocalStorageValue } from "@poriyaalar/custom-hooks";
function App() {
  const value = useLocalStorageValue("data");
 console.log(value)
}

7. useSetLocalStorage 
This hook provides a way to store data   in the browser's local storage. Its not returns any array  values: the current value stored in window storage and a function to set a new value.

useSetLocalStorage(key,defaultValue)
  
  Exmaple : 
import { useSetLocalStorage } from "@poriyaalar/custom-hooks";
function App() {
  const [setValue] = useSetLocalStorage("data", { name: "Test" });

  const setToLocalStorage = () => {
    setValue({ name: "Poriyaalar" });
  };
  setToLocalStorage();
}

8. useGlobalStorage
This hook provides a way to store data and get the data in the browser's window storage. It returns an array with two values: the current value stored in window storage and a function to set a new value.
useLocalStorage(key,defaultValue)
  
  Exmaple : 
import { useGlobalStorage } from "@poriyaalar/custom-hooks";
function App() {
  const [value, setValue] = useGlobalStorage("data", { name: "Test" });

  const setToGlobalStorage = () => {
    setValue({ name: "Poriyaalar" });
  };
  setToGlobalStorage();
  }
9. useGlobalStorageValue 
This hook provides a way to  get the data in the browser's window storage. It returns  stored values.

useGlobalStorageValue(key)
  
  Exmaple : 
import { useGlobalStorageValue } from "@poriyaalar/custom-hooks";
function App() {
  const value = useGlobalStorageValue("data");
 console.log(value)
}
10. useSetGlobalStorage 
This hook provides a way to store data   in the browser's window storage. Its not returns any array  values: the current value stored in window storage and a function to set a new value.

useSetGlobalStorage(key,defaultValue)
  
  Exmaple : 
import { useSetGlobalStorage } from "@poriyaalar/custom-hooks";
function App() {
  const [setValue] = useSetGlobalStorage("data", { name: "Test" });

  const setToGlobalStorage = () => {
    setValue({ name: "Poriyaalar" });
  };
  setToGlobalStorage();
}
