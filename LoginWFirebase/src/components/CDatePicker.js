import React, { useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import Button from "./Button";
import { getFormattedDate } from "../api/utils";

export const CDatePicker = ({
  onChange,
  selectedDate
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        mode="contained"
        onPress={() => setShow((prev) => !prev)}
        style={{ width: 'auto', height: 40 }}
      >
        Date of Birth: {selectedDate ? getFormattedDate(selectedDate) :''}
      </Button>
      {show && (
        <RNDateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          style={{ width: "100%", height: 50 }}
          dateFormat="dayofweek day month"
          onChange={(e, date) => {
            setShow(false);
            onChange(date);
          }}
        />
      )}
    </>
  );
};
