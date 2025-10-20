import { Link, NavLink, useLoaderData, useNavigate } from "react-router";
import { logoutUser } from "~/appwrite/auth";
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utils";

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {
  const user = useLoaderData();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/sign-in");
  };

  return (
    <section className="nav-items">
      <Link to='/' className="link-logo flex items-center">
                          <img
                              src="/assets/icons/logo.png"
                              alt="logo"
                              className="h-10 w-auto md:h-12 object-contain md:my-8"
                          />
                      </Link>
      <nav>
        {sidebarItems.map(({ id, href, icon, label }) => (
          <NavLink to={href} key={id}>
            {({ isActive }: { isActive: boolean }) => (
              <div
                className={cn("group nav-item", {
                  "bg-primary-100 !text-white": isActive,
                })}
                onClick={handleClick}
              >
                <img
                  src={icon}
                  alt={label}
                  className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? "brightness-0 invert" : "text-dark-200"}`}
                />
                {label}
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      <footer className="nav-footer">
        <img
          src={user?.imageUrl || "/assets/images/david.webp"}
          alt={user?.name || "David"}
          referrerPolicy="no-referrer"
        />

        <article>
          <h2>{user?.name}</h2>
          <p> {user?.email} </p>
        </article>

        <button onClick={handleLogout} className="!cursor-poiter">
          <img
            src="/assets/icons/logout.svg"
            alt="logout"
            className=" w-6 h-6 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110" />
        </button>
      </footer>
    </section>
  );
};

export default NavItems;
