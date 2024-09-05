/* eslint-disable react/prop-types */
const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 checkbox-primary"
            onChange={() => onCheckboxChange("male")}
            checked={selectedGender === "male"}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 checkbox-secondary"
            onChange={() => onCheckboxChange("female")}
            checked={selectedGender === "female"}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
