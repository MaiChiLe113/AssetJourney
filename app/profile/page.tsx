import Link from "next/link";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export default function ProfilePage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div style={{ display:"flex", alignItems:"center", height:52, padding:"0 8px", borderBottom:"1px solid #EBEBEB" }}>
        <Link href="/" style={{ width:40, height:40, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <ArrowBackIosNewRoundedIcon sx={{ fontSize: 18 }} />
        </Link>
        <div style={{ flex:1, textAlign:"center", fontSize:16, fontWeight:700 }}>My Profile</div>
        <div style={{ width:40 }} />
      </div>
      <div style={{ padding:"40px 20px", textAlign:"center" }}>
        <div style={{ fontSize:64, marginBottom:16 }}>👤</div>
        <div style={{ fontSize:22, fontWeight:800, marginBottom:8 }}>Alex Nguyen</div>
        <div style={{ fontSize:14, color:"#737373" }}>Techcombank Customer</div>
      </div>
    </div>
  );
}
