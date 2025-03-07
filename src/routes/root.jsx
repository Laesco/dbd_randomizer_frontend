import {
  Outlet,
  useLoaderData,
  Form,
  redirect,
  NavLink,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import { useEffect } from "react";
import {getAddonById, getAddons} from "../api/Addons.js";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);

  return { contacts, q };
}

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

function logThis(){
  console.log('hello');
  getAddonById(2).then(r => console.log(r));
}

export default function Root() {
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  useEffect(() => { });

  return (
    <div className="playerHolder">

      <div>
        Survivor
      </div>
      <div>
        Killer
      </div>
      <button onClick={logThis}>press me</button>
      hello
    </div>
  );
}
