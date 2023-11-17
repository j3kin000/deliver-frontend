import { storage } from "../../firebase-config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const uploadImage = async (item: any) => {
  return new Promise<string>((resolve, reject) => {
    const storageRef = ref(storage, `images/${item.name}`);
    const uploadTask = uploadBytesResumable(storageRef, item);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
      },
      (error) => {
        console.log("alert", error);
        reject(error); // Reject the promise in case of an error
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("imgurl", downloadURL);
            resolve(downloadURL); // Resolve the promise with the downloadURL
          })
          .catch((error) => {
            reject(error); // Reject the promise in case of an error
          });
      }
    );
  });
};
