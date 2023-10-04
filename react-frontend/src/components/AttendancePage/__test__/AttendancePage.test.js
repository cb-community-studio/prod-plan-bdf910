import React from "react";
import { render, screen } from "@testing-library/react";

import AttendancePage from "../AttendancePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders attendance page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AttendancePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("attendance-datatable")).toBeInTheDocument();
    expect(screen.getByRole("attendance-add-button")).toBeInTheDocument();
});
