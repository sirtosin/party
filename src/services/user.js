import { db } from "../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const usersCollectionRef = collection(db, "members");

const fetchMembers = async () => {
    const data = await getDocs(usersCollectionRef);
    const all_members = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return all_members;
}

const addMember = async (payload) => {
    await addDoc(usersCollectionRef, payload);
};

const updateMember = async (id, payload) => {
    const userDoc = doc(db, "members", id);
    await updateDoc(userDoc, payload);
};

const deleteMember = async (id) => {
    const userDoc = doc(db, "members", id);
    await deleteDoc(userDoc);
};

export {
    fetchMembers,
    addMember,
    updateMember,
    deleteMember
}