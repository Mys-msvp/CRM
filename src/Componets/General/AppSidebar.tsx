import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { HouseIcon, LayoutDashboard } from "lucide-react"
import { useNavigate } from "react-router"
  
  export function AppSidebar() {
    const navigate = useNavigate()

    return (
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroup>
            
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild onClick={()=>navigate('/')}>
                  <div>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild onClick={()=>navigate('/leads')}>
                  <div>
                    <HouseIcon className="mr-2 h-4 w-4" />
                    <span>Leads</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        
          
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  