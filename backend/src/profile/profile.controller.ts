import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthenticatedRequest } from 'src/auth/auth.controller';
import { AuthenticatedGuard } from 'src/guards/auth.guard';
import { ProfileService } from './profile.service';

@Controller('profile')
@UseGuards(AuthenticatedGuard)
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async getUserProfile(@Req() req: AuthenticatedRequest): Promise<unknown> {
    return await this.profileService.getUserProfile(req.user.id);
  }
}
