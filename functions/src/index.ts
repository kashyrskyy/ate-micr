import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const publishScheduledMaterials = functions.pubsub
  .schedule("every 1 minutes")
  .onRun(async () => {
    const db = admin.firestore();
    const now = admin.firestore.Timestamp.now();

    try {
      const snapshot = await db.collection("materials")
        .where("scheduledTimestamp", "<=", now)
        .where("published", "==", false)
        .get();

      const batch = db.batch();
      snapshot.forEach((doc) => {
        batch.update(doc.ref, {
          published: true,
          scheduledTimestamp: null,
        });
      });

      await batch.commit();
      console.log("Scheduled materials published successfully.");
    } catch (error) {
      console.error("Error publishing scheduled materials:", error);
    }

    return null;
  });
