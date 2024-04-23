import { useEffect, useState } from "react";
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from "../firebase";

export const GetCategories = () => {
    const [categories, setSkills] = useState([]);

    useEffect(() => {
        const unsubscribeCategories = fetchData("categories", setSkills);
        return () => {
            unsubscribeCategories();
        };
    }, []);

    const fetchData = (collectionName, setter) => {
        const q = query(collection(db, collectionName));
        const unsubscribe = onSnapshot(q, (snap) => {
            const fetchedData = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setter(fetchedData);
        });
        return unsubscribe;
    };

    return { categories };
};
