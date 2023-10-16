import React from "react";
import PropTypes from "prop-types";
import styles from "./SampleComponent.module.css";

export default function SampleComponent({ samplePropTitle }) {
    return (
        // This is how you use module scoped CSS (use this method only if TailwindCSS isn't able to handle the usecase)
        <div className={styles.parent}>
            {/* This is how you use TailwindCSS */}
            <h1 className="text-red-600">{samplePropTitle}</h1>
        </div>
    );
}

SampleComponent.propTypes = {
    samplePropTitle: PropTypes.string.isRequired,
};
