import React, { useEffect } from "react";
import "@simonwep/pickr/dist/themes/classic.min.css"; // 'classic' theme
import Pickr from "@simonwep/pickr";

const ColorPicker = ({ RgbaColor, setRgbaColor }) => {
  useEffect(() => {
    // Simple example, see optional options for more configuration.
    const pickr = Pickr.create({
      el: ".color-picker",
      theme: "classic", // or 'monolith', or 'nano'
      default: "#E69389",

      swatches: [
        "rgba(29, 53, 87, 1)",
        "rgba(244, 67, 54, 1)",
        "rgba(233, 30, 99, 0.95)",
        "rgba(103, 58, 183, 0.85)",
        "rgba(63, 81, 181, 0.8)",
        "rgba(33, 150, 243, 0.75)",
        "rgba(3, 169, 244, 0.7)",
        "rgba(0, 188, 212, 0.7)",

        "rgba(0, 150, 136, 0.75)",
        "rgba(76, 175, 80, 0.8)",
        "rgba(139, 195, 74, 0.85)",
        "rgba(205, 220, 57, 0.9)",
        "rgba(255, 193, 7, 1)",
      ],

      components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: true,
          cmyk: true,
          input: true,
          clear: true,
          save: true,
        },
      },
    });

    let clearColor = "#1d3557";

    pickr.on("change", (color) => setRgbaColor(color.toRGBA().toString()));
    // pickr.on("clear", (instance) => setRgbaColor(clearColor.toRGBA(.toString()));
    // this.setState({ rgbaColor: rgbaColors });
  }, []);

  return (
    <div className="" style={{ padding: 0, backgroundColor: `${RgbaColor}` }}>
      {/* {rgbaColor} */}
      <div className="color-picker"></div>
    </div>
  );
};

export default ColorPicker;
