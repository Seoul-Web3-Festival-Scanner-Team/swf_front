import styled from "@emotion/styled";
import React from "react";
import { COLORS } from "styles/global/globalColors";

const MONTHS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];
const YEARS = new Array(201).fill(1900).map((value, index) => value + index);

const Center = styled.div`
  text-align: center;
  font: 16px 'Roboto', sans-serif;
`;

const DateText = styled.div`
  font-size: 30px;
  font-weight: 300;
`;

const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  margin: 30px 0;
  overflow: hidden;
  width: 100%;
`;

const Wheel = styled.div`
  position: relative;
  height: 50px;
  margin: 0;
  border-top: 2px solid ${COLORS.simple_blue_op};
  border-bottom: 2px solid ${COLORS.simple_blue_op};
  border-radius: 0;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 80px;
    height: 50px;
    background-color: ${COLORS.white};
    opacity: 0.8;
    pointer-events: none;
    z-index: 1;
  }

  &:before {
    top: -52px;
  }

  &:after {
    bottom: -52px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 50px;
    user-select: none;
  }
`;

class CustomWheel extends React.Component {
  constructor({ selected }) {
    super();
    this.state = { position: selected ? -(selected - 1) * 50 : 0 };
    this.offset = 0;
    this.dragging = false;
  }

  componentDidUpdate() {
    let selectedPosition = -(this.props.selected - 1) * 50;

    if (!this.dragging && this.state.position !== selectedPosition) {
      this.setState({ position: selectedPosition });
    }
  }

  onMouseDown = (event) => {
    this.previousY = event.touches
      ? event.touches[0].clientY
      : event.clientY;
    this.dragging = true;

    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
    document.addEventListener("touchmove", this.onMouseMove);
    document.addEventListener("touchend", this.onMouseUp);
  };

  onMouseMove = (event) => {
    let clientY = event.touches ? event.touches[0].clientY : event.clientY;

    this.offset = clientY - this.previousY;

    let maxPosition = -this.props.data.length * 50;
    let position = this.state.position + this.offset;

    this.setState({
      position: Math.max(maxPosition, Math.min(50, position)),
    });

    this.previousY = event.touches
      ? event.touches[0].clientY
      : event.clientY;
  };

  onMouseUp = () => {
    // calculate closest snap
    let maxPosition = -(this.props.data.length - 1) * 50;
    let roundedPosition =
      Math.round((this.state.position + this.offset * 5) / 50) * 50;
    let finalPosition = Math.max(maxPosition, Math.min(0, roundedPosition));

    this.dragging = false;
    this.setState({ position: finalPosition });

    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("touchmove", this.onMouseMove);
    document.removeEventListener("touchend", this.onMouseUp);

    this.props.onDateChange(this.props.type, -finalPosition / 50);
  };

  render() {
    let inlineStyle = {
      willChange: "transform",
      transition: `transform ${Math.abs(this.offset) / 100 + 0.1}s`,
      transform: `translateY(${this.state.position - 2}px)`,
    };

    return (
      <Wheel
        className="dragdealer year"
        onMouseDown={this.onMouseDown}
        onTouchStart={this.onMouseDown}
      >
        <ul className="handle" style={inlineStyle}>
          {this.props.data.map((year) => (
            <li key={year}>{year}</li>
          ))}
        </ul>
      </Wheel>
    );
  }
}

class DatePicker extends React.Component {
  dateChanged = (type, changedData) => {
    let newDate;

    if (type === "day") {
      newDate = new Date(
        this.props.date.getFullYear(),
        this.props.date.getMonth(),
        changedData + 1
      );
    } else if (type === "month") {
      let maxDayInSelectedMonth = new Date(
        this.props.date.getFullYear(),
        changedData + 1,
        0
      ).getDate();
      let day = Math.min(
        this.props.date.getDate(),
        maxDayInSelectedMonth
      );

      newDate = new Date(this.props.date.getFullYear(), changedData, day);
    } else if (type === "year") {
      let maxDayInSelectedMonth = new Date(
        1900 + changedData,
        this.props.date.getMonth() + 1,
        0
      ).getDate();
      let day = Math.min(
        this.props.date.getDate(),
        maxDayInSelectedMonth
      );

      newDate = new Date(
        1900 + changedData,
        this.props.date.getMonth(),
        day
      );
    }

    this.props.onDateChange(newDate);
  };

  render() {
    this.days = new Array(
      new Date(
        this.props.date.getFullYear(),
        this.props.date.getMonth() + 1,
        0
      ).getDate()
    )
      .fill(1)
      .map((value, index) => value + index);

    this.months = MONTHS;
    this.years = YEARS;

    return (
      <DatePickerWrapper>
        <CustomWheel
          type="year"
          data={this.years}
          selected={this.props.date.getYear() + 1}
          onDateChange={this.dateChanged}
        />
        년
        <CustomWheel
          type="month"
          data={this.months}
          selected={this.props.date.getMonth() + 1}
          onDateChange={this.dateChanged}
        />
        월
        <CustomWheel
          type="day"
          data={this.days}
          selected={this.props.date.getDate()}
          onDateChange={this.dateChanged}
        />
        일
      </DatePickerWrapper>
    );
  }
}

class TextDatePicker extends React.Component {
  // dateChanged = (date) => {
  //   this.props.onChange(date);
  // };

  // state = { date: new Date() };
  constructor(props) {
    super(props);
    this.state = { date: props.date };
  }

  dateChanged = (newDate) => {
    this.setState({ date: newDate });
    this.props.onChange(newDate);
  };

  render() {
    return (
      <Center>
        <DatePicker date={this.state.date} onDateChange={this.dateChanged} />
      </Center>
    );
  }
}

export default TextDatePicker;