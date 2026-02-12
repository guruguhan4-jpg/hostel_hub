  
        // Page Navigation
        function showPage(pageId) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.add('hidden'));
            document.getElementById(pageId).classList.remove('hidden');
        }

        // Student Login
        function studentLogin(event) {
            event.preventDefault();
            const username = document.getElementById('studentUsername').value;
            
            // Set student name
            document.getElementById('studentName').textContent = username;
            document.getElementById('welcomeStudentName').textContent = username.split(' ')[0];
            
            // Set avatar initials
            const initials = username.split(' ').map(n => n[0]).join('').toUpperCase();
            document.getElementById('studentAvatar').textContent = initials;
            
            showPage('studentDashboard');
            return false;
        }

        // Admin Login
        function adminLogin(event) {
            event.preventDefault();
            showPage('adminDashboard');
            return false;
        }

        // Logout
        function logout() {
            showPage('studentLoginPage');
        }

        // Toggle Sidebar for Mobile
        function toggleSidebar(sidebarId) {
            document.getElementById(sidebarId).classList.toggle('active');
        }

        // Student Section Navigation
        function showStudentSection(section) {
            // Hide all sections
            document.getElementById('studentDashboardSection').classList.add('hidden');
            document.getElementById('raiseComplaintSection').classList.add('hidden');
            document.getElementById('leaveRequestSection').classList.add('hidden');
            document.getElementById('roomDetailsSection').classList.add('hidden');

            // Update nav items
            const navItems = document.querySelectorAll('#studentSidebar .nav-item');
            navItems.forEach(item => item.classList.remove('active'));

            // Show selected section
            if (section === 'dashboard') {
                document.getElementById('studentDashboardSection').classList.remove('hidden');
                document.getElementById('studentPageTitle').textContent = 'Dashboard';
                navItems[0].classList.add('active');
            } else if (section === 'raiseComplaint') {
                document.getElementById('raiseComplaintSection').classList.remove('hidden');
                document.getElementById('studentPageTitle').textContent = 'Raise Complaint';
                navItems[1].classList.add('active');
            } else if (section === 'leaveRequest') {
                document.getElementById('leaveRequestSection').classList.remove('hidden');
                document.getElementById('studentPageTitle').textContent = 'Request Leave';
                navItems[2].classList.add('active');
            } else if (section === 'roomDetails') {
                document.getElementById('roomDetailsSection').classList.remove('hidden');
                document.getElementById('studentPageTitle').textContent = 'Room Details';
                navItems[3].classList.add('active');
            }
        }

        // Admin Section Navigation
        function showAdminSection(section) {
            // Hide all sections
            document.getElementById('adminDashboardSection').classList.add('hidden');
            document.getElementById('viewComplaintsSection').classList.add('hidden');
            document.getElementById('viewLeaveRequestsSection').classList.add('hidden');
            document.getElementById('roomManagementSection').classList.add('hidden');

            // Update nav items
            const navItems = document.querySelectorAll('#adminSidebar .nav-item');
            navItems.forEach(item => item.classList.remove('active'));

            // Show selected section
            if (section === 'dashboard') {
                document.getElementById('adminDashboardSection').classList.remove('hidden');
                document.getElementById('adminPageTitle').textContent = 'Dashboard';
                navItems[0].classList.add('active');
            } else if (section === 'viewComplaints') {
                document.getElementById('viewComplaintsSection').classList.remove('hidden');
                document.getElementById('adminPageTitle').textContent = 'View Complaints';
                navItems[1].classList.add('active');
            } else if (section === 'viewLeaveRequests') {
                document.getElementById('viewLeaveRequestsSection').classList.remove('hidden');
                document.getElementById('adminPageTitle').textContent = 'Leave Requests';
                navItems[2].classList.add('active');
            } else if (section === 'roomManagement') {
                document.getElementById('roomManagementSection').classList.remove('hidden');
                document.getElementById('adminPageTitle').textContent = 'Room Management';
                navItems[3].classList.add('active');
            }
        }

        // Submit Complaint
        function submitComplaint(event) {
            event.preventDefault();
            const successAlert = document.getElementById('complaintSuccess');
            successAlert.style.display = 'block';
            
            setTimeout(() => {
                successAlert.style.display = 'none';
                document.getElementById('complaintType').value = '';
                document.getElementById('complaintDescription').value = '';
            }, 3000);
            
            return false;
        }

        // Submit Leave Request
        function submitLeaveRequest(event) {
            event.preventDefault();
            const successAlert = document.getElementById('leaveSuccess');
            successAlert.style.display = 'block';
            
            setTimeout(() => {
                successAlert.style.display = 'none';
                document.getElementById('leaveFromDate').value = '';
                document.getElementById('leaveToDate').value = '';
                document.getElementById('leaveReason').value = '';
            }, 3000);
            
            return false;
        }

        // Update Complaint Status
        function updateComplaintStatus(select, rowIndex) {
            const row = select.closest('tr');
            const statusCell = row.querySelector('td:nth-child(6)');
            const status = select.value;
            
            if (status === 'Solved') {
                statusCell.innerHTML = '<span class="badge badge-success">Solved</span>';
            } else {
                statusCell.innerHTML = '<span class="badge badge-warning">Ongoing</span>';
            }
        }

        // Update Leave Status
        function updateLeaveStatus(rowIndex, status) {
            const tbody = document.getElementById('leaveRequestsTableBody');
            const row = tbody.rows[rowIndex];
            const statusCell = row.querySelector('td:nth-child(6)');
            const actionCell = row.querySelector('td:nth-child(7)');
            
            if (status === 'Approved') {
                statusCell.innerHTML = '<span class="badge badge-success">Approved</span>';
            } else {
                statusCell.innerHTML = '<span class="badge badge-danger">Rejected</span>';
            }
            
            actionCell.innerHTML = '-';
        }
    