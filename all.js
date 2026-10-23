  // Standard global script variables (No storage dependencies)
        var savedName = "Divya";
        var savedEmail = "Divya@gmail.com";
        var savedPassword = "123456";

        function showLogin() {
            document.getElementById("registerView").style.display = "none";
            document.getElementById("loginView").style.display = "block";
            document.getElementById("dashboardView").style.display = "none";
        }

        function showRegister() {
            document.getElementById("registerView").style.display = "block";
            document.getElementById("loginView").style.display = "none";
            document.getElementById("dashboardView").style.display = "none";
        }

        function showDashboard() {
            document.getElementById("registerView").style.display = "none";
            document.getElementById("loginView").style.display = "none";
            document.getElementById("dashboardView").style.display = "block";
        }

        function registerUser() {
            savedName = document.getElementById("regName").value;
            savedEmail = document.getElementById("regEmail").value;
            savedPassword = document.getElementById("regPassword").value;

            if (savedName == "" || savedEmail == "" || savedPassword == "") {
                alert("Please fill out all the details!");
                return;
            }

            alert("Account registered successfully!");
            
            // Set the login page inputs instantly
            document.getElementById("loginEmail").value = savedEmail;
            document.getElementById("loginPassword").value = savedPassword;
            
            showLogin();
        }

        function loginUser() {
            var typedEmail = document.getElementById("loginEmail").value;
            var typedPassword = document.getElementById("loginPassword").value;

            if (typedEmail === savedEmail && typedPassword === savedPassword) {
                alert("Access Granted!");
                document.getElementById("welcomeMessage").innerText = "Welcome back, " + savedName;
                showDashboard();
            } else {
                alert("Invalid email or password! Please check what you entered.");
            }
        }

        function logoutUser() {
            alert("Logging out...");
            showLogin();
        }

        function buyWatch(watchName) {
            alert("Success! You ordered the " + watchName);
        }