import React from "react";
import { render, screen } from "@testing-library/react";

import AttendanceEditDialogComponent from "../AttendanceEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders attendance edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AttendanceEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("attendance-edit-dialog-component")).toBeInTheDocument();
});
