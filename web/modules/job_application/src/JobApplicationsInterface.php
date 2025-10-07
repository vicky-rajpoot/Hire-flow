<?php

declare(strict_types=1);

namespace Drupal\job_application;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityChangedInterface;
use Drupal\user\EntityOwnerInterface;

/**
 * Provides an interface defining a job applications entity type.
 */
interface JobApplicationsInterface extends ContentEntityInterface, EntityOwnerInterface, EntityChangedInterface {

}
