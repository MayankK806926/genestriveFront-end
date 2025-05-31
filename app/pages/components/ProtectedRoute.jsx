import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../authentication/firebase-config"; // adjust import path

export default function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                // not logged in → redirect
                router.push("/login");
            } else {
                setLoading(false); // user is authenticated
            }
        });
        return () => unsubscribe();
    }, []);

    if (loading) return <p>Loading...</p>;

    return children;
}