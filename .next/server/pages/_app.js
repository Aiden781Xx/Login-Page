/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst useAuth = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (context === undefined) {\n        throw new Error(\"useAuth must be used within an AuthProvider\");\n    }\n    return context;\n};\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Check for existing session on mount\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkAuth = async ()=>{\n            try {\n                const token = localStorage.getItem(\"authToken\");\n                if (token) {\n                    // You can add token validation here if needed\n                    const userData = localStorage.getItem(\"userData\");\n                    if (userData) {\n                        setUser(JSON.parse(userData));\n                    }\n                }\n            } catch (error) {\n                console.error(\"Auth check failed:\", error);\n                localStorage.removeItem(\"authToken\");\n                localStorage.removeItem(\"userData\");\n            } finally{\n                setLoading(false);\n            }\n        };\n        checkAuth();\n    }, []);\n    const login = async (email, password)=>{\n        try {\n            setLoading(true);\n            const response = await fetch(\"/api/auth/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            const data = await response.json();\n            if (data.success) {\n                setUser(data.user);\n                localStorage.setItem(\"userData\", JSON.stringify(data.user));\n                // You can store a token here if your API returns one\n                localStorage.setItem(\"authToken\", \"dummy-token\"); // Replace with actual token\n                return {\n                    success: true,\n                    message: \"Login successful\"\n                };\n            } else {\n                return {\n                    success: false,\n                    message: data.message || \"Login failed\"\n                };\n            }\n        } catch (error) {\n            console.error(\"Login error:\", error);\n            return {\n                success: false,\n                message: \"Network error occurred\"\n            };\n        } finally{\n            setLoading(false);\n        }\n    };\n    const signup = async (userData)=>{\n        try {\n            setLoading(true);\n            const response = await fetch(\"/api/auth/register\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(userData)\n            });\n            const data = await response.json();\n            if (data.success) {\n                setUser(data.user);\n                localStorage.setItem(\"userData\", JSON.stringify(data.user));\n                localStorage.setItem(\"authToken\", \"dummy-token\"); // Replace with actual token\n                return {\n                    success: true,\n                    message: \"Registration successful\"\n                };\n            } else {\n                return {\n                    success: false,\n                    message: data.message || \"Registration failed\"\n                };\n            }\n        } catch (error) {\n            console.error(\"Signup error:\", error);\n            return {\n                success: false,\n                message: \"Network error occurred\"\n            };\n        } finally{\n            setLoading(false);\n        }\n    };\n    const logout = ()=>{\n        setUser(null);\n        localStorage.removeItem(\"authToken\");\n        localStorage.removeItem(\"userData\");\n        router.push(\"/\");\n    };\n    const value = {\n        user,\n        loading,\n        login,\n        signup,\n        logout,\n        isAuthenticated: !!user\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shiva\\\\Downloads\\\\PW SLIP\\\\Desktop Project\\\\Temp BPSI\\\\BPSI Api\\\\src\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 157,\n        columnNumber: 10\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBMEI7WUFDN0QsT0FBTztnQkFDTCxPQUFPO29CQUFFRixTQUFTO29CQUFPRSxTQUFTSixLQUFLSSxPQUFPLElBQUk7Z0JBQXNCO1lBQzFFO1FBQ0YsRUFBRSxPQUFPaEIsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsaUJBQWlCQTtZQUMvQixPQUFPO2dCQUFFYyxTQUFTO2dCQUFPRSxTQUFTO1lBQXlCO1FBQzdELFNBQVU7WUFDUnpCLFdBQVc7UUFDYjtJQUNGO0lBRUEsTUFBTTJCLFNBQVM7UUFDYjdCLFFBQVE7UUFDUk0sYUFBYU8sVUFBVSxDQUFDO1FBQ3hCUCxhQUFhTyxVQUFVLENBQUM7UUFDeEJWLE9BQU8yQixJQUFJLENBQUM7SUFDZDtJQUVBLE1BQU1DLFFBQXlCO1FBQzdCaEM7UUFDQUU7UUFDQWE7UUFDQWM7UUFDQUM7UUFDQUcsaUJBQWlCLENBQUMsQ0FBQ2pDO0lBQ3JCO0lBRUEscUJBQU8sOERBQUNQLFlBQVl5QyxRQUFRO1FBQUNGLE9BQU9BO2tCQUFRakM7Ozs7OztBQUM5QyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vIEJQU0ktYXBpLy4vc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD8xZmEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmludGVyZmFjZSBVc2VyIHtcclxuICBfaWQ6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByb2xlOiAnc3RhZmYnIHwgJ3N0dWRlbnQnO1xyXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmc7XHJcbiAgcG9zaXRpb24/OiBzdHJpbmc7XHJcbiAgc3R1ZGVudElkPzogc3RyaW5nO1xyXG4gIGdyYWRlPzogc3RyaW5nO1xyXG4gIHNlY3Rpb24/OiBzdHJpbmc7XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbiAgdXBkYXRlZEF0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQXV0aENvbnRleHRUeXBlIHtcclxuICB1c2VyOiBVc2VyIHwgbnVsbDtcclxuICBsb2FkaW5nOiBib29sZWFuO1xyXG4gIGxvZ2luOiAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW47IG1lc3NhZ2U6IHN0cmluZyB9PjtcclxuICBzaWdudXA6ICh1c2VyRGF0YTogU2lnbnVwRGF0YSkgPT4gUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW47IG1lc3NhZ2U6IHN0cmluZyB9PjtcclxuICBsb2dvdXQ6ICgpID0+IHZvaWQ7XHJcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2lnbnVwRGF0YSB7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByb2xlOiAnc3RhZmYnIHwgJ3N0dWRlbnQnO1xyXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmc7XHJcbiAgcG9zaXRpb24/OiBzdHJpbmc7XHJcbiAgc3R1ZGVudElkPzogc3RyaW5nO1xyXG4gIGdyYWRlPzogc3RyaW5nO1xyXG4gIHNlY3Rpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoQ29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBdXRoIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyJyk7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIEF1dGhQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBSZWFjdC5GQzxBdXRoUHJvdmlkZXJQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBDaGVjayBmb3IgZXhpc3Rpbmcgc2Vzc2lvbiBvbiBtb3VudFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjaGVja0F1dGggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aFRva2VuJyk7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAvLyBZb3UgY2FuIGFkZCB0b2tlbiB2YWxpZGF0aW9uIGhlcmUgaWYgbmVlZGVkXHJcbiAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyRGF0YScpO1xyXG4gICAgICAgICAgaWYgKHVzZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIHNldFVzZXIoSlNPTi5wYXJzZSh1c2VyRGF0YSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdBdXRoIGNoZWNrIGZhaWxlZDonLCBlcnJvcik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGhUb2tlbicpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyRGF0YScpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNoZWNrQXV0aCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuOyBtZXNzYWdlOiBzdHJpbmcgfT4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9hdXRoL2xvZ2luJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIHNldFVzZXIoZGF0YS51c2VyKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckRhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhLnVzZXIpKTtcclxuICAgICAgICAvLyBZb3UgY2FuIHN0b3JlIGEgdG9rZW4gaGVyZSBpZiB5b3VyIEFQSSByZXR1cm5zIG9uZVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoVG9rZW4nLCAnZHVtbXktdG9rZW4nKTsgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCB0b2tlblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdMb2dpbiBzdWNjZXNzZnVsJyB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UgfHwgJ0xvZ2luIGZhaWxlZCcgfTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignTG9naW4gZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ05ldHdvcmsgZXJyb3Igb2NjdXJyZWQnIH07XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzaWdudXAgPSBhc3luYyAodXNlckRhdGE6IFNpZ251cERhdGEpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbjsgbWVzc2FnZTogc3RyaW5nIH0+ID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYXV0aC9yZWdpc3RlcicsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgc2V0VXNlcihkYXRhLnVzZXIpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyRGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEudXNlcikpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoVG9rZW4nLCAnZHVtbXktdG9rZW4nKTsgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCB0b2tlblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCcgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZGF0YS5tZXNzYWdlIHx8ICdSZWdpc3RyYXRpb24gZmFpbGVkJyB9O1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdTaWdudXAgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ05ldHdvcmsgZXJyb3Igb2NjdXJyZWQnIH07XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGhUb2tlbicpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJEYXRhJyk7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbHVlOiBBdXRoQ29udGV4dFR5cGUgPSB7XHJcbiAgICB1c2VyLFxyXG4gICAgbG9hZGluZyxcclxuICAgIGxvZ2luLFxyXG4gICAgc2lnbnVwLFxyXG4gICAgbG9nb3V0LFxyXG4gICAgaXNBdXRoZW50aWNhdGVkOiAhIXVzZXIsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufTsgIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkF1dGhDb250ZXh0IiwidW5kZWZpbmVkIiwidXNlQXV0aCIsImNvbnRleHQiLCJFcnJvciIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImNoZWNrQXV0aCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJEYXRhIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwicmVtb3ZlSXRlbSIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwic3VjY2VzcyIsInNldEl0ZW0iLCJtZXNzYWdlIiwic2lnbnVwIiwibG9nb3V0IiwicHVzaCIsInZhbHVlIiwiaXNBdXRoZW50aWNhdGVkIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\shiva\\\\Downloads\\\\PW SLIP\\\\Desktop Project\\\\Temp BPSI\\\\BPSI Api\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shiva\\\\Downloads\\\\PW SLIP\\\\Desktop Project\\\\Temp BPSI\\\\BPSI Api\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNzRDtBQUN4QjtBQUVmLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0UsOERBQUNILCtEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovLyBCUFNJLWFwaS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dHMvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICk7XHJcbn0gIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();