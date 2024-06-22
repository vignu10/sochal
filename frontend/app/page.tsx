// import LoginStates from "./states/LoginStates";
import ChallengeForm from '@/app/components/ChallengeForm';
import VideoUploadForm from '@/app/components/VideoUploadForm';
export default function Home() {
  return (
     <div className="flex justify-end margin-0 ">
          <div>
      <h1>Create a Challenge</h1>
      <ChallengeForm />
      <h1>Upload a Video</h1>
      <VideoUploadForm />
    </div>
        {/* <LoginStates></LoginStates> */}
     </div>
  );
}
