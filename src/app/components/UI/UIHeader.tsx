
"use client"



interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {

  return (
    <div className="border-2 border-white border-opacity-25 content-center my-2 p-2">{title}</div>

  );
}

export default Header;