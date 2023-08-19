import { createUploadthing} from "uploadthing/next";
import { getCurrentUser } from "app/libs/session";
const f = createUploadthing();

export const ourFileRouter = {
 
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    
    .middleware(async ({ req }) => {
     
      const user = await getCurrentUser();
 
    
      if (!user) throw new Error("Unauthorized");
 
      
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      
      console.log("Upload complete for userId:", metadata.userId);
 
      console.log("file url", file.url);
    }),
};
 
