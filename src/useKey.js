import { useEffect } from "react";

export function useKey(key,action)
{
    useEffect(
        function () {
          function callBack(e) {
            if (e.code.toLowerCase() === key.toLowerCase()) {
              // handleCloseMovie();
              action();
              console.log("CLosing");
            }
          }
    
          document.addEventListener("keydown", callBack);
          return function () {
            document.removeEventListener("keydown", callBack);
          };
        },
        [action]
      );

}