import {db, storageFB} from "./firebase-config";
import {arrayUnion, collection, doc, getDocs, updateDoc} from "firebase/firestore";
import {ref, getDownloadURL} from "firebase/storage";

export async function getExperts() {
    const q = collection(db, "experts");
    let array = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        let temp = doc.data();
        temp.id = doc.id;
        array.push(temp);
    });
    return array;
}

export async function getRefForPhoto(name) {
    return getDownloadURL(ref(storageFB, `photos/${name}`));
}

export async function addBusyTime(uid, data) {
    await updateDoc(doc(db, "experts", `${uid}`), {
        busyTime: arrayUnion(...data)
    })
}



