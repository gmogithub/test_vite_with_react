import React, { FC, useState } from "react";

interface ProfilePageProps {
  userId: number
}


export const ProfilesPage: FC = () => {
  const profiles = [1, 10, 20, 30];
  const [profile, setProfile] = useState<number>();
  return <div>
    {profiles.map(profile => (<div key={profile}>
      <span>{profile}</span>
      <button onClick={() => setProfile(profile)}>afficher profile</button>
    </div>))}
    {profile && <ProfilePage userId={profile}/>}
  </div>;
}

const ProfilePage: FC<ProfilePageProps> = ({ userId }) => {
  return <Profile userId={userId} key={userId}/>;
}

const items : {id: string}[] = [{id: "test"}];

const Profile: FC<ProfilePageProps> = ({ userId }) => {
  const [comment, setComment] = useState('');


  const selection = items.find(i => i.id === comment) ?? null;
  console.log(selection);

  return <div>
    <h1>{userId}</h1>
    <input type={"text"} value={comment} onChange={(e) => {
      setComment(e.target.value);
    }
    }/>
  </div>
}