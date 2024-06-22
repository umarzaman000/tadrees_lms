import { useState } from "react";
import {
  Autocomplete,
  Paper,
  Text,
  ThemeIcon,
  rem,
  PasswordInput,
  Group,
  Anchor,
  Button,
  Modal,
  Box,
  TextInput,
  Flex,
  Checkbox,
  Input,
  Loader
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconColorSwatch } from "@tabler/icons-react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import classes from "../../components/CardGradient.module.css";
import "@mantine/core/styles/Input.css";
import axios from "axios";
import "../../components/login.css";
import { useRouter } from "next/navigation";
export default function Login() {
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const onLogin = async (e) => {

    e.preventDefault();
    if (!data.username || !data.password) {
      alert("Please Fill All Inputs");
      return;
    }
    try {
      setLoading(true)
      const response = await axios.post("api/signin", data);
      localStorage.setItem(
        "userId",
        response.data.userData._id
      );
      setLoading(false)
      router.push("/home");
    } catch(error) {
      setLoading(false)
      alert("User Not Available")
      return;
    }
  };
  const defaultdata = { username: "", password: "" };
  const [data, setdata] = useState(defaultdata);
  console.log("==.......data", data);
  const onValueChange = (e) => {
    console.log("target: ", e.target);
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleChangeForPassword = () => {
    setPasswordShow(!passwordShow);
  };
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <>
      <div className="container">
        <Paper withBorder radius="md" className={classes.card}>
          <Image width={160} height={48} src={logo} />
          <Text size="xl" weight={500} mt="md" className="signin">
            Sign In
          </Text>

          <Input
            style={{ marginTop: "20px", marginBottom: "20px" }}
            type="text"
            placeholder="username"
            name="username"
            value={data.username}
            onChange={(e) => onValueChange(e)}
          />
          <Input
            style={{ marginTop: "20px", marginBottom: "20px" }}
            type={passwordShow ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={(e) => onValueChange(e)}
            value={data.password}
          />
          <div className="d-flex-chechbox">
            <label style={{ fontSize: "12px" }}>
              <input
                type="checkbox"
                onChange={handleChangeForPassword}
                checked={passwordShow}
              />
              Show Password
            </label>
            <Anchor pt={2} fw={500} fz="xs">
              Forgot your password?
            </Anchor>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              disabled={loading}
              onClick={(e) => onLogin(e)}
              variant="filled"
              size="xs"
              radius="l"
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              Login In
            </Button>
            {loading ? <Loader color="blue" /> : null}
          </div>
        </Paper>
      </div>
    </>
  );
}
