
"use client"



interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {

  return (
    <div className=" border-white content-center my-2 ">{title}</div>

  );
}

export default Header;