import React from "react";
import { _borderRadius } from '../../../../../Vue-Nuxt/virtual_resume/.nuxt/types/tailwind.config';

const Avatar = ({ radius, size, src }) => {
    const avatarStyle = {
        
        borderRadius: radius === "md" ? "8px" : "50%",
        width: size === "lg" ? "50px" : "30px",
        height: size === "lg" ? "50px" : "30px",
        objectFit: "cover",
    };

    return <img src={src} alt="Avatar" style={avatarStyle} />;
};

export default Avatar;