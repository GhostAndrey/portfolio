import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Андрей — геймдизайнер и Unity-разработчик";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08080b",
          color: "#f4f0e6",
          padding: 64,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 78% 22%, rgba(200,255,77,0.22), transparent 46%), radial-gradient(circle at 12% 82%, rgba(255,92,53,0.18), transparent 42%)",
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, letterSpacing: 4, color: "#a3a19a" }}>
          <span>АНДРЕЙ.</span>
          <span>GAME DESIGN / 2026</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 118, lineHeight: 0.9, letterSpacing: -7, fontWeight: 700 }}>GAMES WITH</div>
          <div style={{ fontSize: 118, lineHeight: 0.9, letterSpacing: -7, fontWeight: 700, color: "#c8ff4d" }}>CHARACTER.</div>
          <div style={{ fontSize: 30, color: "#a3a19a", marginTop: 22 }}>
            13 Unity projects · Go services · web & automation
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#a3a19a", letterSpacing: 2 }}>
          <span>UNITY / C# / GO / NEXT.JS</span>
          <span>GITHUB.COM/GHOSTANDREY</span>
        </div>
      </div>
    ),
    size
  );
}
