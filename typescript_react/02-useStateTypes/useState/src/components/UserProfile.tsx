import React, { useEffect, useState } from "react";

export interface Info {
  name: string;
  id: number;
  email: string;
  location: Location;
}

export interface Location {
  city: string;
  country: string;
}

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
function UserProfile({ user }: Info) {
  const [userInfo, setUserInfo] = useState<Info>(user);
  const [tempUserInfo, setTempUserInfo] = useState<Info>(user);
  const [errors, setErrors] = useState<DeepPartial<Info>>({});
  type InputFieldName = "name" | "email" | "city" | "country";
  function onChangeTempUserInfo(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target as { name: InputFieldName; value: string };
    if (name === "city" || name === "country") {
      setTempUserInfo({
        ...tempUserInfo,
        location: {
          ...tempUserInfo.location,
          [name]: value,
        },
      });
    } else {
      setTempUserInfo({
        ...tempUserInfo,
        [name]: value,
      });
    }
  }
  function handleSumbmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    let newErrors: DeepPartial<Info> = {};

    if (!tempUserInfo.name) newErrors.name = "Name is required";
    if (!tempUserInfo.email) newErrors.email = "Email is required";

	// initilize the location and an empty object
	if (!tempUserInfo.location.city || !tempUserInfo.location.country)
		newErrors.location = {};
    if (!tempUserInfo.location.city)
      newErrors.location.city = "City is required";
    if (!tempUserInfo.location.country){
		newErrors.location.country = "Country is required";
		console.log("Country is required");
	}
    if (Object.keys(newErrors).length === 0) {
      setErrors({});
    } else {
      setErrors(newErrors);
    }
    if (
      tempUserInfo.name &&
      tempUserInfo.email &&
      tempUserInfo.location.city &&
      tempUserInfo.location.country
    ) {
      setUserInfo(tempUserInfo);
    }
  }

  useEffect(() => {
    if (JSON.stringify(userInfo) !== JSON.stringify(tempUserInfo)) {
      setTempUserInfo(userInfo);
    }
  }, [userInfo]);
  return (
    <>
      <ul>
        <li>Id: {userInfo.id}</li>
        <li>Name: {userInfo.name}</li>
        <li>Email: {userInfo.email}</li>
        <li>City: {userInfo.location.city}</li>
        <li>Country: {userInfo.location.country}</li>
      </ul>
      <form onSubmit={handleSumbmit}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            value={tempUserInfo.name}
            onChange={(e) => onChangeTempUserInfo(e)}
          />
          <br />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            value={tempUserInfo.email}
            onChange={(e) => onChangeTempUserInfo(e)}
          />
          <br />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="city">City</label>
          <br />

          <input
            type="text"
            name="city"
            id="city"
            value={tempUserInfo.location.city}
            onChange={(e) => onChangeTempUserInfo(e)}
          />
          <br />
          {errors?.location?.city && <p style={{ color: "red" }}>{errors.location.city}</p>}
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <br />

          <input
            type="text"
            name="country"
            id="country"
            value={tempUserInfo.location.country}
            onChange={(e) => onChangeTempUserInfo(e)}
          />
          <br />
          {errors?.location?.country && <p style={{ color: "red" }}>{errors.location.country}</p>}
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default UserProfile;
